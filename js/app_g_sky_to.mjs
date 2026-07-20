import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { app_g_sky_set } from "./app_g_sky_set.mjs";
import { g_phase_color } from "./g_phase_color.mjs";
import { g_sky_seed_get } from "./g_sky_seed_get.mjs";
import { global_function_initialize } from "./global_function_initialize.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { add_1 } from "./add_1.mjs";
import { not } from "./not.mjs";
import { html_style_set } from "./html_style_set.mjs";
export async function app_g_sky_to(target) {
  "move the day toward a target PHASE (0 = morning … 3 = evening) and PERSIST it (g.sky_phase) so the map keeps it after the conversation. a conversation calls this as each part completes, so the sky walks morning→evening in step with progress. animates the tint element with a short linear rAF drift; a fresh call supersedes the prior via the element token (html_scroll_animate style)";
  let g = await app_g_game_save_get();
  property_set(g, "sky_phase", target);
  let bag = global_function_initialize(app_g_sky_set, {});
  if (not(property_exists(bag, "element"))) {
    return;
  }
  let element = property_get(bag, "element");
  let seed = g_sky_seed_get(g);
  let from = element.sky_phase;
  let duration = 9000;
  let token = add_1(element.sky_token);
  element.sky_token = token;
  let start = null;
  function step(now) {
    if (element.sky_token !== token) {
      return;
    }
    if (start === null) {
      start = now;
    }
    let elapsed = now - start;
    let t = elapsed / duration;
    if (t > 1) {
      t = 1;
    }
    let phase = from + (target - from) * t;
    element.sky_phase = phase;
    html_style_set(element, "background", g_phase_color(phase, seed));
    if (t < 1) {
      requestAnimationFrame(step);
    }
  }
  requestAnimationFrame(step);
}
