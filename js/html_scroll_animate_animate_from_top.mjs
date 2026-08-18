import { arguments_assert } from "./arguments_assert.mjs";
import { html_scroll_animate_animate_start } from "./html_scroll_animate_animate_start.mjs";
import { property_get } from "./property_get.mjs";
export function html_scroll_animate_animate_from_top(element) {
  arguments_assert(arguments, 1);
  let r = html_scroll_animate_animate_start(element);
  let start = property_get(r, "start");
  let token = property_get(r, "token");
  let from_top = property_get(r, "from_top");
  let r2 = {
    start,
    token,
    from_top,
  };
  return r2;
}
