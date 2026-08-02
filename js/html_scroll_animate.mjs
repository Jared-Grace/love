import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { divide } from "./divide.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { multiply } from "./multiply.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
export function html_scroll_animate(element, target_left, target_top) {
  let duration = 350;
  let from_left = element.scrollLeft;
  let from_top = element.scrollTop;
  let token = (element.scroll_animation_token || 0) + 1;
  element.scroll_animation_token = token;
  let start = null;
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
  let promise = new Promise(animate);
  element.scroll_animation_settle = promise;
  return promise;
}
