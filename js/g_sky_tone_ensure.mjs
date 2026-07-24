import { g_sky_tone_id } from "./g_sky_tone_id.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { each } from "./each.mjs";
export function g_sky_tone_ensure() {
  "ensure the shared, hidden SVG <filter> the sky backdrop references exists in the DOM (created once), and return its three feFunc nodes (R,G,B) whose tableValues g_sky_tone_write rewrites per phase. an SVG feComponentTransfer table is the only CSS-reachable way to apply a real TONE CURVE — brightness/contrast can't darken mids, keep darks distinguishable, and bloom lights to white at the same time";
  let id = g_sky_tone_id();
  let found = document.getElementById(id);
  if (null_not_is(found)) {
    return found.funcs;
  }
  let ns = "http://www.w3.org/2000/svg";
  let svg = document.createElementNS(ns, "svg");
  svg.setAttribute("style", "position:absolute;width:0;height:0;pointer-events:none");
  let filter = document.createElementNS(ns, "filter");
  filter.setAttribute("id", id);
  filter.setAttribute("color-interpolation-filters", "sRGB");
  let transfer = document.createElementNS(ns, "feComponentTransfer");
  let tags = ["feFuncR", "feFuncG", "feFuncB"];
  let funcs = [];
  function add_func(tag) {
    let fn = document.createElementNS(ns, tag);
    fn.setAttribute("type", "table");
    transfer.appendChild(fn);
    funcs.push(fn);
  }
  each(tags, add_func);
  filter.appendChild(transfer);
  svg.appendChild(filter);
  document.body.appendChild(svg);
  filter.funcs = funcs;
  return funcs;
}
