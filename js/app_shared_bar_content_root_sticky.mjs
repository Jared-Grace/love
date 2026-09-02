import { each } from "./each.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_bar_content_sticky } from "./html_bar_content_sticky.mjs";
import { property_get } from "./property_get.mjs";
import { html_page_padding_x } from "./html_page_padding_x.mjs";
export function app_shared_bar_content_root_sticky(root) {
  arguments_assert(arguments, 1);
  ("the same frame as the twin next door - a bar above a body, on a page root somebody else has already prepared - except that the page itself scrolls and the bar sticks to the top of it. For screens holding a place to type; the twin's own note says why one with a scrolling box inside loses what is typed on a phone.");
  ("A foot comes back with them, held against the bottom of the screen the way the bar is held against the top. It is given the same room at the sides as the body so that anything standing in it lines up with what is being read above it.");
  let bc = html_bar_content_sticky(root);
  let bar = property_get(bc, "bar");
  let content = property_get(bc, "content");
  let foot = property_get(bc, "foot");
  each([content, foot], html_page_padding_x);
  let frame = {
    bar,
    content,
    foot,
  };
  return frame;
}
