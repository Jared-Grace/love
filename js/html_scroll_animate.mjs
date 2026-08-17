import { html_scroll_animate_promise } from "./html_scroll_animate_promise.mjs";
export function html_scroll_animate(element, target_left, target_top) {
  let duration = 350;
  let promise = html_scroll_animate_promise(
    element,
    target_left,
    target_top,
    duration,
  );
  element.scroll_animation_settle = promise;
  return promise;
}
