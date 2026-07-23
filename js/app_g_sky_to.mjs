import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { app_g_sky_set } from "./app_g_sky_set.mjs";
import { app_g_sky_paint } from "./app_g_sky_paint.mjs";
import { g_sky_seed_get } from "./g_sky_seed_get.mjs";
import { global_function_initialize } from "./global_function_initialize.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { not } from "./not.mjs";
export async function app_g_sky_to(target) {
  "smoothly DRIFT the sky to a target continuous PHASE (0=morning … 3=evening; values past 3 keep going, wrapping night→morning) and persist it (g.sky_phase). a CSS gradient can't be transitioned, so this recomputes g_phase_color EVERY animation frame (html_scroll_animate style). an element-attached token cancels a superseded drift (e.g. a conversation-end snap); `from` is the element's LIVE phase, so a step fired mid-drift chains smoothly instead of jumping. a setTimeout GUARANTEES the target color is painted even if rAF is throttled/paused (background tab or a janky frame) — otherwise a dropped final frame leaves the tint STUCK on the old color while the phase silently advanced";
  let g = await app_g_game_save_get();
  property_set(g, "sky_phase", target);
  let bag = global_function_initialize(app_g_sky_set, {});
  if (not(property_exists(bag, "element"))) {
    return;
  }
  let element = property_get(bag, "element");
  let seed = g_sky_seed_get(g);
  let from = element.sky_phase;
  let duration = 600;
  let token = element.sky_token + 1;
  element.sky_token = token;
  let start = null;
  function paint(phase) {
    app_g_sky_paint(element, phase, seed);
  }
  function step(now) {
    let cancelled = element.sky_token !== token;
    if (cancelled) {
      return;
    }
    if (start === null) {
      start = now;
    }
    let fraction = (now - start) / duration;
    if (fraction > 1) {
      fraction = 1;
    }
    let ease = fraction * fraction * (3 - 2 * fraction);
    paint(from + (target - from) * ease);
    if (fraction < 1) {
      requestAnimationFrame(step);
    }
  }
  function settle() {
    let superseded = element.sky_token !== token;
    if (superseded) {
      return;
    }
    paint(target);
  }
  requestAnimationFrame(step);
  setTimeout(settle, duration + 150);
}
