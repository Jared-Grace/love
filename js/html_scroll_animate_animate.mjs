import { html_scroll_animate_animate_start } from "./html_scroll_animate_animate_start.mjs";
import { property_get } from "./property_get.mjs";
import { html_scroll_animate_animate_animate } from "./html_scroll_animate_animate_animate.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function html_scroll_animate_animate(
  element,
  target_left,
  target_top,
  duration,
  from_left,
) {
  arguments_assert(arguments, 5);
  let r3 = html_scroll_animate_animate_start(element);
  let start = property_get(r3, "start");
  let token = property_get(r3, "token");
  let from_top = property_get(r3, "from_top");
  let r2 = {
    start,
    token,
    from_top,
  };
  let r = r2;
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
