import { arguments_assert } from "./arguments_assert.mjs";
export function html_scroll_animate_start(element) {
  arguments_assert(arguments, 1);
  let from_top = element.scrollTop;
  let token = (element.scroll_animation_token || 0) + 1;
  element.scroll_animation_token = token;
  let start = null;
  let r = {
    from_top,
    token,
    start,
  };
  return r;
}
