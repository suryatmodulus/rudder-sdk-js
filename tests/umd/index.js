import analytics from "rudder-sdk-js-develop";
// var rudderanalytics = require("./bundle") //import

analytics.load("1mdgM4QbwpIASnXJPaOhwEidftp", "http://localhost:8080/", {
  //integrations: { All: false, GA: true, Hotjar: true },
  logLevel: "DEBUG",
  configUrl:"http://localhost:5000/sourceConfig",
  loadIntegration: false
});
//analytics.setAnonymousId("my-user-id");
analytics.page();
analytics.identify("12345");
analytics.track("my event", { prop1: "val1" }, { integrations: { All: true } });
//analytics.alias("new-user-id");
