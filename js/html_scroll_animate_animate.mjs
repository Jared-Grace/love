import { html_scroll_animate_animate_animate } from "./html_scroll_animate_animate_animate.mjs";
import { html_scroll_animate_animate_from_top } from "./html_scroll_animate_animate_from_top.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function html_scroll_animate_animate(
  element,
  target_left,
  target_top,
  duration,
  from_left,
) {
  arguments_assert(arguments, 5);
  let r = html_scroll_animate_animate_from_top(element);
  let animate = html_scroll_animate_animate_animate(
    r,
    element,
    target_left,
    target_top,
    duration,
    from_left,
  );
  return animate;
}
