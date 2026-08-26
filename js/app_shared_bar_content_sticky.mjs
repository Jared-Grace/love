import { app_shared_bar_content_root_frame } from "./app_shared_bar_content_root_frame.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear_context } from "./html_clear_context.mjs";
import { app_shared_bar_content_root_sticky } from "./app_shared_bar_content_root_sticky.mjs";
export function app_shared_bar_content_sticky(context) {
  arguments_assert(arguments, 1);
  ("the same frame as the twin next door - the page emptied of the last screen, and the bar and the body under it, handed back by name - except that the page itself scrolls and the bar sticks to the top of it.");
  ("A body with its own scrolling box is exactly as tall as the screen, so whatever is added after it - the foot of the page - is pushed just below the fold and can only be reached by a second, thin scroll of the page itself, which reads as a foot pinned to the bottom of the window rather than the end of the reading. With the page doing the scrolling there is one scroll, and the foot simply ends the page, the way it does on every other screen in these apps.");
  let root = html_clear_context(context);
  let bc = app_shared_bar_content_root_sticky(root);
  let frame = app_shared_bar_content_root_frame(bc, root);
  return frame;
}
