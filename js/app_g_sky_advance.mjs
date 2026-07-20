import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { app_g_sky_set } from "./app_g_sky_set.mjs";
import { g_phase_color } from "./g_phase_color.mjs";
import { g_sky_seed_get } from "./g_sky_seed_get.mjs";
import { global_function_initialize } from "./global_function_initialize.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { floor } from "./floor.mjs";
import { add_1 } from "./add_1.mjs";
import { add } from "./add.mjs";
import { ternary } from "./ternary.mjs";
import { not } from "./not.mjs";
import { html_style_set } from "./html_style_set.mjs";
export async function app_g_sky_advance(final) {
  "drift the sky-tint one step forward as the player completes a conversation part — a continuous LINEAR motion of the day phase: quickly finish arriving at the state just entered (~15s; a gentler ~45s on the FINAL part), then keep drifting HALFWAY toward the next state over the rest of ~a minute, so the sky is always gently in motion and never hard-cuts. runs its own rAF loop (only while moving); a fresh call supersedes the prior one via an element token (html_scroll_animate style)";
  let bag = global_function_initialize(app_g_sky_set, {});
  if (not(property_exists(bag, "element"))) {
    return;
  }
  let element = property_get(bag, "element");
  let g = await app_g_game_save_get();
  let seed = g_sky_seed_get(g);
  let from = element.sky_phase;
  let target = add_1(floor(from));
  let mid = ternary(final, target, add(target, 0.5));
  let d1 = ternary(final, 45000, 15000);
  let d2 = ternary(final, 0, 45000);
  let token = add_1(element.sky_token);
  element.sky_token = token;
  let start = null;
  function step(now) {
    let cancelled = element.sky_token !== token;
    if (cancelled) {
      return;
    }
    if (start === null) {
      start = now;
    }
    let elapsed = now - start;
    let phase = mid;
    if (elapsed < d1) {
      phase = from + ((target - from) * elapsed) / d1;
    } else if (elapsed < d1 + d2) {
      phase = target + ((mid - target) * (elapsed - d1)) / d2;
    }
    element.sky_phase = phase;
    html_style_set(element, "background", g_phase_color(phase, seed));
    if (elapsed < d1 + d2) {
      requestAnimationFrame(step);
    }
  }
  requestAnimationFrame(step);
}
