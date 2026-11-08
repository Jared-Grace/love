import { object_property_names } from "./object_property_names.mjs";
import { multiply_round } from "./multiply_round.mjs";
import { divide } from "./divide.mjs";
import { html_viewport_readout_update_box } from "./html_viewport_readout_update_box.mjs";
import { property_get } from "./property_get.mjs";
import { date_now_iso } from "./date_now_iso.mjs";
import { app_shared_font_size } from "./app_shared_font_size.mjs";
export function app_shared_device_report(context) {
  "what a device report holds: when it was taken, the address and the browser, the size chosen for the letters, every height the browser keeps for the window, and the names of what this site has stored on the device with only how long each is";
  "The window is measured by the same reader the ?viewport readout uses, so the two cannot come to measure it two ways. The three heights a stylesheet can ask for are only answered by boxes of those heights, so three empty ones are hung on the page for the reading and taken off straight after.";
  "What is stored is named, never sent: a reader's place and history sit in there beside their settings, and a stranger tapping this should hand over the shape of their screen and nothing they read.";
  function round_to(n) {
    let tens = multiply_round(n, 10);
    let rounded = divide(tens, 10);
    return rounded;
  }
  let page = document.documentElement;
  let probes = {};
  for (let unit of ["dvh", "svh", "lvh"]) {
    let probe = document.createElement("div");
    Object.assign(probe.style, {
      position: "absolute",
      top: "0",
      left: "0",
      width: "0",
      height: "100" + unit,
      visibility: "hidden",
      "pointer-events": "none",
    });
    page.appendChild(probe);
    probes[unit] = probe;
  }
  let box = document.createElement("pre");
  let r = html_viewport_readout_update_box(
    [],
    round_to,
    probes,
    window.visualViewport,
    box,
  );
  for (let probe of Object.values(probes)) {
    probe.remove();
  }
  let lines = property_get(r, "lines");
  let stored = [];
  for (let key of object_property_names(window.localStorage)) {
    let value = window.localStorage.getItem(key);
    stored.push(key + " " + value.length);
  }
  let report = {
    when: date_now_iso(),
    address: window.location.href,
    agent: navigator.userAgent,
    font_size: app_shared_font_size(context),
    lines,
    stored,
  };
  return report;
}
