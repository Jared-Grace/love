import { html_scroll_animate_animate } from "./html_scroll_animate_animate.mjs";
export function html_scroll_animate(element, target_left, target_top) {
  let duration = 350;
  let from_left = element.scrollLeft;
  let animate = html_scroll_animate_animate(
    element,
    target_left,
    target_top,
    duration,
    from_left,
  );
  let promise = new Promise(animate);
  element.scroll_animation_settle = promise;
  return promise;
}
