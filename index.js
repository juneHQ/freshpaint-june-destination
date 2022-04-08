// The following APIs and libraries are available at runtime:
// * aws-sdk@2.1079.0 as AWS
// * atob@2.1.2 as atob
// * btoa@1.2.1 as btoa
// * crypto as crypto
// * form-data@2.4.0 as FormData
// * oauth@0.9.15 as OAuth
// * xml@1.0.1 as xml
// * lodash@4.17.15 as _
// * node-fetch@2.6.0 as fetch

const trackEndpoint = "https://api.june.so/api/track";
const pageEndpoint = "https://api.june.so/api/page";
const identifyEndpoint = "https://api.june.so/api/identify";
const groupEndpoint = "https://api.june.so/api/group";

/**
 * Handle track event
 */
async function onTrack(event, settings) {
  await fetch(trackEndpoint, {
    method: "POST",
    headers: {
      Authorization: `Basic ${settings.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  });
}

/**
 * Handle identify event
 */
async function onIdentify(event, settings) {
  await fetch(identifyEndpoint, {
    method: "POST",
    headers: {
      Authorization: `Basic ${settings.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  });
}

/**
 * Handle group event
 */
async function onGroup(event, settings) {
  await fetch(groupEndpoint, {
    method: "POST",
    headers: {
      Authorization: `Basic ${settings.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  });
}

/**
 * Handle page event
 */
async function onPage(event, settings) {
  await fetch(pageEndpoint, {
    method: "POST",
    headers: {
      Authorization: `Basic ${settings.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  });
}
