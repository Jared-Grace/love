import { html_document_body } from "./html_document_body.mjs";
import { html_div } from "./html_div.mjs";
import { html_button } from "./html_button.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { g_times } from "./g_times.mjs";
import { text_first_upper_to } from "./text_first_upper_to.mjs";
import { app_g_sky_jump } from "./app_g_sky_jump.mjs";
import { list_map_index } from "./list_map_index.mjs";
export function app_g_sky_choices() {
  ("the #sky demo's always-visible CHOICE panel (dev only): a fixed column top-right, above everything, with one pill per time of day in ",
    g_times.name,
    " — clicking a pill jumps the sky straight to that keyframe (",
    app_g_sky_jump.name,
    "), so you can inspect any sky without walking there. built by mapping ",
    g_times.name,
    ", so adding a keyframe adds its button automatically (no list to keep in sync)");
  let body = html_document_body();
  let panel = html_div(body);
  html_style_assign(panel, {
    position: "fixed",
    top: "0.5rem",
    right: "0.5rem",
    "z-index": "2000",
    display: "flex",
    "flex-direction": "column",
    gap: "0.3rem",
  });
  let times = g_times();
  function pill_add(name, index) {
    let label = text_first_upper_to(name);
    async function on_click() {
      await app_g_sky_jump(index);
    }
    let button = html_button(panel, label, on_click);
    html_style_assign(button, {
      background: "rgba(0, 0, 0, 0.7)",
      color: "white",
      border: "none",
      padding: "0.3rem 0.6rem",
      "border-radius": "0.4rem",
      "font-size": "1rem",
      cursor: "pointer",
    });
    return button;
  }
  list_map_index(times, pill_add);
}
