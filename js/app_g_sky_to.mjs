import { fn_name } from "./fn_name.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { divide } from "./divide.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { multiply } from "./multiply.mjs";
import { less_than } from "./less_than.mjs";
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
  ("smoothly DRIFT the sky to a target continuous PHASE (0=morning … 4=night, 5=sunrise; values past the last anchor keep going, wrapping back to morning) and persist it (g.sky_phase). a CSS gradient can't be transitioned, so this recomputes ",
    fn_name("g_phase_color"),
    " EVERY animation frame (",
    fn_name("html_scroll_animate"),
    " style). an element-attached token cancels a superseded drift (e.g. a conversation-end snap); `from` is the element's LIVE phase, so a step fired mid-drift chains smoothly instead of jumping. a setTimeout GUARANTEES the target color is painted even if rAF is throttled/paused (background tab or a janky frame) — otherwise a dropped final frame leaves the tint STUCK on the old color while the phase silently advanced");
  let g = await app_g_game_save_get();
  property_set(g, "sky_phase", target);
  let bag = global_function_initialize(app_g_sky_set, {});
  let b = property_exists(bag, "element");
  if (not(b)) {
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
    let cancelled = not_equal(element.sky_token, token);
    if (cancelled) {
      return;
    }
    if (equal(start, null)) {
      start = now;
    }
    let top = subtract(now, start);
    let fraction = divide(top, duration);
    if (greater_than(fraction, 1)) {
      fraction = 1;
    }
    let left = multiply(fraction, fraction);
    let right = multiply(2, fraction);
    let right2 = subtract(3, right);
    let ease = multiply(left, right2);
    let left2 = subtract(target, from);
    paint(from + multiply(left2, ease));
    if (less_than(fraction, 1)) {
      requestAnimationFrame(step);
    }
  }
  function settle() {
    let superseded = not_equal(element.sky_token, token);
    if (superseded) {
      return;
    }
    paint(target);
  }
  requestAnimationFrame(step);
  setTimeout(settle, duration + 150);
}
