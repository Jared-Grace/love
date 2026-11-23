import { not } from "./not.mjs";
import { error } from "./error.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function html_camera_microphone_stream_upright() {
  "The front camera and the microphone as one live stream, with the camera asked for in whichever way this browser answers with an upright picture - returned with a line saying every size each way of asking got, so a phone that still gives a wide one can be seen to.";
  "WHY SEVERAL WAYS ARE TRIED: a phone held upright whose own camera app is upright still handed the page 1280 by 720, cropped and zoomed, when asked for 720 by 1280 (human 2026-11-23). Browsers differ in how they match a requested size against the camera's modes - some match it the camera's sideways way, some cut a wide strip out of the upright picture - and which one a browser does cannot be told from outside. So each way is asked in turn and the answer read back off the camera itself, which is the only place it is known.";
  "The choice: the largest upright picture any way gave; if none was upright, the least wide one, since it is the one that loses least when fitted into an upright frame.";
  "Each try opens the camera for a moment and closes it again, so only the chosen one stays open, and the browser asks permission once, on the first.";
  let devices = navigator.mediaDevices;
  if (not(devices)) {
    error("The camera only works on a secure page: open this page with https.");
  }
  let ways = [
    {
      label: "plain",
      video: {
        facingMode: "user",
      },
    },
    {
      label: "720x1280",
      video: {
        facingMode: "user",
        width: {
          ideal: 720,
        },
        height: {
          ideal: 1280,
        },
      },
    },
    {
      label: "1280x720",
      video: {
        facingMode: "user",
        width: {
          ideal: 1280,
        },
        height: {
          ideal: 720,
        },
      },
    },
    {
      label: "1920x1440",
      video: {
        facingMode: "user",
        width: {
          ideal: 1920,
        },
        height: {
          ideal: 1440,
        },
      },
    },
    {
      label: "1440x1920",
      video: {
        facingMode: "user",
        width: {
          ideal: 1440,
        },
        height: {
          ideal: 1920,
        },
      },
    },
  ];
  let results = [];
  for (let way of ways) {
    let video = property_get(way, "video");
    let probe = await navigator.mediaDevices.getUserMedia({
      video,
    });
    let track = probe.getVideoTracks()[0];
    let settings = track.getSettings();
    let width = property_get(settings, "width");
    let height = property_get(settings, "height");
    for (let t of probe.getTracks()) {
      t.stop();
    }
    results.push({
      way,
      width,
      height,
    });
  }
  function score(result) {
    let width = property_get(result, "width");
    let height = property_get(result, "height");
    let upright = greater_than(height, width);
    if (upright) {
      let r = multiply(width, height);
      return r;
    }
    let right = divide(width, height);
    let r = subtract(0, right);
    return r;
  }
  let best = results[0];
  for (let result of results) {
    let a = score(result);
    let b = score(best);
    if (greater_than(a, b)) {
      best = result;
    }
  }
  function said(result) {
    let way = property_get(result, "way");
    let value = property_get(way, "label");
    let value2 = property_get(result, "width");
    let value3 = property_get(result, "height");
    let r = text_combine_multiple([value, " gave ", value2, "x", value3]);
    return r;
  }
  let tried = results.map(said).join(", ");
  let chosen = property_get(best, "way");
  let stream = await navigator.mediaDevices.getUserMedia({
    video: property_get(chosen, "video"),
    audio: true,
  });
  let r = {
    stream,
    tried,
  };
  return r;
}
