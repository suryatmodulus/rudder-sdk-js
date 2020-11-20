/* eslint-disable class-methods-use-this */
import logger from "../../utils/logUtil";
import { type } from "../../utils/utils"

class Amplitude {
  constructor(config, analytics) {
    this.analytics = analytics;
    this.apiKey = config.apiKey;
    this.trackAllPages = config.trackAllPages || false;
    this.trackNamedPages = config.trackNamedPages || false;
    this.trackCategorizedPages = config.trackCategorizedPages || false;
    this.trackUtmProperties = config.trackUtmProperties|| false;
    this.trackReferrer = config.trackReferrer|| false;
    this.batchEvents = config.batchEvents|| false;
    this.eventUploadThreshold = config.eventUploadThreshold || 30;
    this.eventUploadPeriodMillis = config.eventUploadPeriodMillis || 30000;
    this.forceHttps = config.forceHttps || false;
    this.trackGclid = config.trackGclid || false;
    this.saveParamsReferrerOncePerSession = config.saveParamsReferrerOncePerSession || false;
    this.deviceIdFromUrlParam = config.deviceIdFromUrlParam || false;
    //this.mapQueryParams = config.mapQueryParams;
    this.trackRevenuePerProduct  = config.trackRevenuePerProduct || false;
    this.preferAnonymousIdForDeviceId = config.preferAnonymousIdForDeviceId || false;
    this.traitsToSetOnce = [];
    this.traitsToIncrement = [];
    this.appendFieldsToEventProps = config.appendFieldsToEventProps || false;
    this.unsetParamsReferrerOnNewSession  = config.unsetParamsReferrerOnNewSession || false;
    this.trackProductsOnce = config.trackProductsOnce || false;
    //this.versionName = config.versionName;

    if(config.traitsToSetOnce && config.traitsToSetOnce.length > 0){
      config.traitsToSetOnce.forEach(element => {
        if(element && element["traits"] && element["traits"] !== ''){
          this.traitsToSetOnce.push(element["traits"]);
        }
      });
    }
    if(config.traitsToIncrement && config.traitsToIncrement.length > 0){
      config.traitsToIncrement.forEach(element => {
        if(element && element["traits"] && element["traits"] !== ''){
          this.traitsToIncrement.push(element["traits"]);
        }
      });
    }

  }

  init() {
    (function (e, t) {
      var n = e.amplitude || {
        _q: [],
        _iq: {}
      };
      var r = t.createElement("script");
      r.type = "text/javascript";
      r.integrity = "sha384-girahbTbYZ9tT03PWWj0mEVgyxtZoyDF9KVZdL+R53PP5wCY0PiVUKq0jeRlMx9M";
      r.crossOrigin = "anonymous";
      r.async = true;
      r.src = "https://cdn.amplitude.com/libs/amplitude-7.2.1-min.gz.js";
      r.onload = function () {
        if (!e.amplitude.runQueuedFunctions) {
          console.log("[Amplitude] Error: could not load SDK")
        }
      };
      var i = t.getElementsByTagName("script")[0];
      i.parentNode.insertBefore(r, i);

      function s(e, t) {
        e.prototype[t] = function () {
          this._q.push([t].concat(Array.prototype.slice.call(arguments, 0)));
          return this
        }
      }
      var o = function () {
        this._q = [];
        return this
      };
      var a = ["add", "append", "clearAll", "prepend", "set", "setOnce", "unset"];
      for (var c = 0; c < a.length; c++) {
        s(o, a[c])
      }
      n.Identify = o;
      var u = function () {
        this._q = [];
        return this
      };
      var l = ["setProductId", "setQuantity", "setPrice", "setRevenueType", "setEventProperties"];
      for (var p = 0; p < l.length; p++) {
        s(u, l[p])
      }
      n.Revenue = u;
      var d = ["init", "logEvent", "logRevenue", "setUserId", "setUserProperties", "setOptOut", "setVersionName", "setDomain", "setDeviceId", "enableTracking", "setGlobalUserProperties", "identify", "clearUserProperties", "setGroup", "logRevenueV2", "regenerateDeviceId", "groupIdentify", "onInit", "logEventWithTimestamp", "logEventWithGroups", "setSessionId", "resetSessionId"];

      function v(e) {
        function t(t) {
          e[t] = function () {
            e._q.push([t].concat(Array.prototype.slice.call(arguments, 0)))
          }
        }
        for (var n = 0; n < d.length; n++) {
          t(d[n])
        }
      }
      v(n);
      n.getInstance = function (e) {
        e = (!e || e.length === 0 ? "$default_instance" : e).toLowerCase();
        if (!n._iq.hasOwnProperty(e)) {
          n._iq[e] = {
            _q: []
          };
          v(n._iq[e])
        }
        return n._iq[e]
      };
      e.amplitude = n
    })(window, document);

    const initOptions = {
      includeUtm: this.trackUtmProperties,
      batchEvents: this.batchEvents,
      eventUploadThreshold: this.eventUploadThreshold,
      eventUploadPeriodMillis: this.eventUploadPeriodMillis,
      forceHttps: this.forceHttps,
      includeGclid: this.trackGclid,
      includeReferrer: this.trackReferrer,
      saveParamsReferrerOncePerSession: this.saveParamsReferrerOncePerSession,
      deviceIdFromUrlParam: this.deviceIdFromUrlParam,
      unsetParamsReferrerOnNewSession: this.unsetParamsReferrerOnNewSession,
      deviceId: this.preferAnonymousIdForDeviceId && this.analytics && this.analytics.getAnonymousId()
    }
    window.amplitude.getInstance().init(this.apiKey, null, initOptions);
    /* if (this.versionName) {
      window.amplitude.getInstance().setVersionName(this.versionName);
    } */
  }

  identify(rudderElement) {
    logger.debug("in Amplitude identify");

    this.setDeviceId(rudderElement);

    // rudderElement.message.context will always be present as part of identify event payload.
    const { traits } = rudderElement.message.context;
    const { userId } = rudderElement.message;

    if (userId) {
      window.amplitude.getInstance().setUserId(userId);
    }

    if(traits){
      let amplitudeIdentify = new window.amplitude.Identify();
      for (const trait in traits) {
        if (!traits.hasOwnProperty(trait)) {
          continue;
        }

        const shouldIncrement = this.traitsToIncrement.indexOf(trait) >= 0;
        const shouldSetOnce = this.traitsToSetOnce.indexOf(trait) >= 0;

        if (shouldIncrement) {
          amplitudeIdentify.add(trait, traits[trait]);
        }

        if (shouldSetOnce) {
          amplitudeIdentify.setOnce(trait, traits[trait]);
        }
        
        if (!shouldIncrement && !shouldSetOnce ) {
          amplitudeIdentify.set(trait, traits[trait]);
        }
      }
      window.amplitude.identify(amplitudeIdentify);
    }

  }

  track(rudderElement) {
    logger.debug("in Amplitude track");
    this.setDeviceId(rudderElement);

    const { properties } = rudderElement.message;
    
    // message.properties will always be present as part of track event.
    const { products } = properties;

    let clonedTrackEvent = {};
    Object.assign(clonedTrackEvent, rudderElement.message);

    // For track products once, we will send the products in a single call.
    if(this.trackProductsOnce){
      if(products &&  type(products) == 'array') { // track all the products in a single event.
        let allProducts = [];
        
        let productKeys = Object.keys(products);
        for (let index = 0; index < productKeys.length; index++) {
          let product = {};
          product = this.getProductAttributes(products[index])
          allProducts.push(product);
        }
        
        clonedTrackEvent.properties.products = allProducts;

        this.trackEvent(clonedTrackEvent, this.trackRevenuePerProduct); // track revenue as a whole if trackRevenuePerProduct is not enabled.
        
        // If trackRevenuePerProduct is enabled, track revenues per product. 
        if(this.trackRevenuePerProduct){
          const trackEventMessage = {};
          Object.assign(trackEventMessage, clonedTrackEvent);
          this.trackingRevenuePerProduct(trackEventMessage, products, false);
        }
        
      } else { // track event and revenue as a whole as products array is not available.
        this.trackEvent(clonedTrackEvent, false);
      }
      return;
    }
    
    if(products &&  type(products) == 'array') { // track events iterating over product array individually.
      delete clonedTrackEvent.properties.products;
      this.trackEvent(clonedTrackEvent, this.trackRevenuePerProduct);

      const trackEventMessage = {};
      Object.assign(trackEventMessage, clonedTrackEvent);

      /* for (let index = 0; index < products.length; index++) {
        let product = products[index];
        let price = product.price;
        let quantity = product.quantity;
        clonedTrackEvent.properties = product;
        clonedTrackEvent.event = 'Product Purchased';
        if (this.trackRevenuePerProduct && price != null && quantity) {
          if (revenueType) {
            clonedTrackEvent.properties.revenueType = revenueType;
          }
          if (revenue) {
            clonedTrackEvent.properties.revenue = revenue;
          }
          this.trackRevenue(clonedTrackEvent);
        }
        this.trackEvent(clonedTrackEvent, this.trackRevenuePerProduct);
      } */

      // track products and revenue per product basis.
      this.trackingRevenuePerProduct(trackEventMessage, products, true);
    } else { // track event and revenue as a whole as no product array is present.
      this.trackEvent(clonedTrackEvent, false);
    }
  }

  trackingRevenuePerProduct(trackEventMessage, products, trackEvent){
    const { revenue, revenueType } = trackEventMessage.properties;
    for (let index = 0; index < products.length; index++) {
      let product = products[index];
      let price = product.price;
      let quantity = product.quantity;
      trackEventMessage.properties = product;
      trackEventMessage.event = 'Product Purchased';
      if (this.trackRevenuePerProduct && price != null && quantity) {
        if (revenueType) {
          trackEventMessage.properties.revenueType = revenueType;
        }
        if (revenue) {
          trackEventMessage.properties.revenue = revenue;
        }
        this.trackRevenue(trackEventMessage);
      }
      if(trackEvent){
        this.trackEvent(trackEventMessage, this.trackRevenuePerProduct);
      }
      
    }
  }

  trackEvent(rudderMessage, dontTrackRevenue){
    const { properties, event } = rudderMessage;

    window.amplitude.getInstance().logEvent(event, properties);
    if(properties.revenue && !dontTrackRevenue) {
      this.trackRevenue(rudderMessage);
    }

  }
/**
 * track page events base on destination settings. If more than one settings is enabled, multiple events may be logged for a single page event.
 * For example, if category of a page is present, and both trackAllPages and trackCategorizedPages are enabled, then 2 events will be tracked for 
 * a single pageview - 'Loaded a page' and `Viewed page ${category}`.
 *
 * @memberof Amplitude
 */
  page(rudderElement) {
    logger.debug("in Amplitude page");
    this.setDeviceId(rudderElement);

    const { properties, name, category } = rudderElement.message;

    // all pages
    if (this.trackAllPages) {
      const event = 'Loaded a page';
      amplitude.getInstance().logEvent(event, properties);
    }

    // categorized pages
    if (category && this.trackCategorizedPages) {
      const event = `Viewed page ${category}`;
      amplitude.getInstance().logEvent(event, properties);
    }

    // named pages
    if (name && this.trackNamedPages) {
      const event = `Viewed page ${name}`;
      amplitude.getInstance().logEvent(event, properties);
    }

  }

  group(rudderElement) {
    logger.debug("in Amplitude group");

    this.setDeviceId(rudderElement);

    const { groupId, traits } = rudderElement.message;

    const groupTypeTrait = this.groupTypeTrait;
    const groupValueTrait = this.groupValueTrait;

    if(groupTypeTrait && groupValueTrait && traits){
      var groupType = traits[groupTypeTrait];
      var groupValue = traits[groupValueTrait];
    }

    if (groupType && groupValue) {
      window.amplitude.getInstance().setGroup(groupTypeTrait, groupValueTrait);
    } else {
      if (groupId) { // Similar as segment but not sure whether we need it as our cloud mode supports only the above if block
        window.amplitude.getInstance().setGroup('[Rudderstack] Group', groupId);
      }
    }

    // https://developers.amplitude.com/docs/setting-user-properties#setting-group-properties
    // no other api for setting group properties for javascript

  }

  setDeviceId(rudderElement){
    const { anonymousId } = rudderElement.message;
    if(this.preferAnonymousIdForDeviceId && anonymousId){
      window.amplitude.getInstance().setDeviceId(anonymousId);
    }
  }

  /**
   * Tracks revenue with logRevenueV2() api based on revenue/price present in event payload. If neither of revenue/price present, it returns.
   * The event payload may contain ruddermessage of an original track event payload (from trackEvent method) or it is derived from a product 
   * array (from trackingRevenuePerProduct) in an e-comm event.
   *
   * @param {*} rudderMessage
   * @returns
   * @memberof Amplitude
   */
  trackRevenue(rudderMessage){
    var mapRevenueType = {
      'order completed': 'Purchase',
      'completed order': 'Purchase',
      'product purchased': 'Purchase'
    };

    const { properties, event } = rudderMessage;
    let { price, productId, quantity, revenue, product_id } = properties;
    let revenueType = properties.revenueType || mapRevenueType[event.toLowerCase()];

    productId = productId || product_id;

    // If neither revenue nor price is present, then return
    if(!revenue && !price){
      console.debug("revenue or price is not present.");
      return;
    }

    if (!price) {
      price = revenue;
      //quantity = 1;
    }
    if(!quantity){
      quantity = 1;
    }
    let amplitudeRevenue = new window.amplitude.Revenue().setPrice(price).setQuantity(quantity).setEventProperties(properties);
    if (revenueType) {
      amplitudeRevenue.setRevenueType(revenueType);
    }

    if (productId) {
      amplitudeRevenue.setProductId(productId);
    }
    window.amplitude.getInstance().logRevenueV2(amplitudeRevenue);
  }

  getProductAttributes(product) {
    return {
      productId: product.productId || product.product_id,
      sku: product.sku,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      category: product.category
    };
  }

  isLoaded() {
    logger.debug("in Amplitude isLoaded");
    return !!(window.amplitude && window.amplitude.getInstance().options);
  }

  isReady() {
    return !!(window.amplitude && window.amplitude.getInstance().options);
  }
}

export default Amplitude;