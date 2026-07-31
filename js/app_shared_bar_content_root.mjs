import { arguments_assert } from "./arguments_assert.mjs";
import { html_bar_content_padded } from "./html_bar_content_padded.mjs";
import { property_get } from "./property_get.mjs";
export function app_shared_bar_content_root(root) {
  arguments_assert(arguments, 1);
  ("the bar and the scrolling body under it, built on a page root somebody else has already prepared");
  ("six screens built this pair and each named the two halves in whichever order it happened to want them, so the frame had no name of its own and reading one screen told you nothing about the next. The twin next door is for the screens that empty a context first; this one is for the screens that reach their root another way.");
  let bc = html_bar_content_padded(root);
  let bar = property_get(bc, "bar");
  let content = property_get(bc, "content");
  let frame = {
    bar,
    content,
  };
  return frame;
}
