import { html_body_div } from "./html_body_div.mjs";
import { html_button } from "./html_button.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { g_times } from "./g_times.mjs";
import { text_first_upper_to } from "./text_first_upper_to.mjs";
import { app_g_sky_jump } from "./app_g_sky_jump.mjs";
import { app_g_sky_pill_style } from "./app_g_sky_pill_style.mjs";
import { app_g_sky_choices_highlight } from "./app_g_sky_choices_highlight.mjs";
import { global_function_property_set } from "./global_function_property_set.mjs";
import { list_map_index } from "./list_map_index.mjs";
export async function app_g_sky_choices() {
  ("the #day_parts demo's always-visible CHOICE panel (dev only): a fixed column top-right, above everything, with one pill per time of day in ",
    g_times.name,
    " — clicking a pill jumps the sky straight to that keyframe (",
    app_g_sky_jump.name,
    "), so you can inspect any sky without walking there. built by mapping ",
    g_times.name,
    ", so adding a keyframe adds its button automatically. stashes the pills (button + index) so ",
    app_g_sky_choices_highlight.name,
    " can mark the CURRENT sky, and applies that you-are-here highlight once on render");
  let panel = html_body_div();
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
  function pill_of(name, index) {
    let label = text_first_upper_to(name);
    async function on_click() {
      await app_g_sky_jump(index);
    }
    let button = html_button(panel, label, on_click);
    app_g_sky_pill_style(button, false);
    let pill = {
      button,
      index,
    };
    return pill;
  }
  let pills = list_map_index(times, pill_of);
  global_function_property_set(app_g_sky_choices_highlight, "pills", pills);
  await app_g_sky_choices_highlight();
}
