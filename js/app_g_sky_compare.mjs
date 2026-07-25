import { html_document_body } from "./html_document_body.mjs";
import { html_div } from "./html_div.mjs";
import { html_button } from "./html_button.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { g_sunrise_candidates } from "./g_sunrise_candidates.mjs";
import { g_time_index } from "./g_time_index.mjs";
import { g_time_override_set } from "./g_time_override_set.mjs";
import { app_g_sky_jump } from "./app_g_sky_jump.mjs";
import { app_g_sky_pill_style } from "./app_g_sky_pill_style.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { each } from "./each.mjs";
import { list_map_index } from "./list_map_index.mjs";
export async function app_g_sky_compare() {
  "the #sky panel's SUNRISE compare strip (dev only): a fixed column top-left (under the routes pill), a header plus one pill per candidate palette. clicking a pill overrides the sunrise palette (a dev preview, baked cycle untouched) and jumps to the sunrise phase, so you flip the SAME sunrise between candidates on the live map and pick one; the clicked pill stays highlighted";
  let body = html_document_body();
  let panel = html_div(body);
  html_style_assign(panel, {
    position: "fixed",
    top: "2.6rem",
    left: "0.5rem",
    "z-index": "2000",
    display: "flex",
    "flex-direction": "column",
    gap: "0.3rem",
  });
  let header = html_div(panel);
  html_text_set(header, "Sunrise:");
  html_style_assign(header, {
    color: "white",
    background: "rgba(0, 0, 0, 0.7)",
    padding: "0.2rem 0.5rem",
    "border-radius": "0.4rem",
    "font-size": "0.85rem",
  });
  let candidates = g_sunrise_candidates();
  let sunrise_index = g_time_index("sunrise");
  let entries = null;
  function pill_of(candidate, index) {
    let label = property_get(candidate, "label");
    let components = property_get(candidate, "components");
    async function on_click() {
      g_time_override_set("sunrise", components);
      await app_g_sky_jump(sunrise_index);
      function restyle(entry) {
        let button = property_get(entry, "button");
        let active = equal(property_get(entry, "index"), index);
        app_g_sky_pill_style(button, active);
      }
      each(entries, restyle);
    }
    let button = html_button(panel, label, on_click);
    app_g_sky_pill_style(button, false);
    let entry = { button, index };
    return entry;
  }
  entries = list_map_index(candidates, pill_of);
}
