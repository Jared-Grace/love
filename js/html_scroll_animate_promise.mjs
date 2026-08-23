import { arguments_assert } from "./arguments_assert.mjs";
import { html_scroll_animate_run } from "./html_scroll_animate_run.mjs";
export function html_scroll_animate_promise(
  element,
  target_left,
  target_top,
  duration,
) {
  arguments_assert(arguments, 4);
  let from_left = element.scrollLeft;
  let animate = html_scroll_animate_run(
    element,
    target_left,
    target_top,
    duration,
    from_left,
  );
  let promise = new Promise(animate);
  return promise;
}
