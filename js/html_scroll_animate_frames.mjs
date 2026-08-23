import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { greater_than } from "./greater_than.mjs";
import { multiply } from "./multiply.mjs";
import { less_than } from "./less_than.mjs";
export function html_scroll_animate_frames(
  r,
  element,
  token,
  target_left,
  target_top,
  duration,
  from_left,
  from_top,
) {
  "Builds the running of one smooth scroll: every frame moves the element a little further along an eased path from where it stood towards where it is going, slow at each end and quick in the middle, and reports once when it has settled.";
  "The element carries a token saying which scroll is the current one. A scroll that finds a different token there has been overtaken by a later one, so it stops where it stands and does not jump to its own target - without that, two scrolls asked for in quick succession pull the same element in two directions.";
  "The settling is reported exactly once whatever happens: a flag makes the finishing safe to reach twice, and a timer set a little past the intended length reaches it anyway. A browser hands out no frames at all to a tab nobody is looking at, so without that timer a scroll begun and then hidden would never report, and whoever was waiting on it would wait for good.";
  arguments_assert(arguments, 8);
  let start = property_get(r, "start");
  function animate(settled) {
    let done = false;
    function finish() {
      if (done) {
        return;
      }
      done = true;
      let superseded = not_equal(element.scroll_animation_token, token);
      if (not(superseded)) {
        element.scrollLeft = target_left;
        element.scrollTop = target_top;
      }
      settled();
    }
    function step(now) {
      let cancelled = not_equal(element.scroll_animation_token, token);
      if (cancelled) {
        finish();
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
      let left2 = subtract(target_left, from_left);
      element.scrollLeft = from_left + multiply(left2, ease);
      let left3 = subtract(target_top, from_top);
      element.scrollTop = from_top + multiply(left3, ease);
      if (less_than(fraction, 1)) {
        requestAnimationFrame(step);
        return;
      }
      finish();
    }
    requestAnimationFrame(step);
    setTimeout(finish, duration + 120);
  }
  return animate;
}
