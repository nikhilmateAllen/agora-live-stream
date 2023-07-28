// grab the Mixpanel factory
import mixpanel from "mixpanel-browser";

mixpanel.init("0ffb1d2f068153f2a6de3084bad3fadb", {
    debug: true,
    track_pageview: true,
  });

export const mixpanelIdentify = localPeerId => {
  mixpanel.identify(localPeerId);
};

export function sendEvent(eventName, eventData) {
  console.log("===> eventName ===>", eventName);
  console.log(eventData);
  console.log("===> ===> ===>");
  mixpanel.track(eventName, eventData);
}