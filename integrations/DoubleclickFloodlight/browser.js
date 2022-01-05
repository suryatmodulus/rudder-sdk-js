import logger from "../../utils/logUtil";

class DoubleclickFloodlight {
  constructor(config) {
    this.name = "DOUBLECLICK_FLOODLIGHT";
    this.activityTag = config.activityTag;
    this.groupTag = config.groupTag;
    this.eventsList = config.eventsList;
    this.advertiserId = config.advertiserId;
    this.cookieMatching = config.cookieMatching;
    this.googleNetworkId = config.googleNetworkId;
  }

  init() {
    logger.debug("===in init Doubleclick Floodlight===");
    if (!this.advertiserId) {
      return;
    }
  }

  track(rudderElement) {
    if (!this.advertiserId) {
      logger.debug("advertiserId not found");
      return;
    }
    const { message } = rudderElement;
    let event = get(message, "event");
    event = event ? event.trim().tolowerCase() : event;
    const eventCheck = eventValidity(event, this.eventsList);
    // get the index of the event if present
    if (!eventCheck.present) {
      logger.debug(`event ${event} not configured in dashboard`);
      return;
    }
  }
}
export default DoubleclickFloodlight;
