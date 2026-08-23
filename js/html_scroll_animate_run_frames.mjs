import { html_scroll_animate_frames } from "./html_scroll_animate_frames.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function html_scroll_animate_run_frames(
  r,
  element,
  target_left,
  target_top,
  duration,
  from_left,
) {
  arguments_assert(arguments, 6);
  let from_top = property_get(r, "from_top");
  let token = property_get(r, "token");
  let animate = html_scroll_animate_frames(
    r,
    element,
    token,
    target_left,
    target_top,
    duration,
    from_left,
    from_top,
  );
  return animate;
}
