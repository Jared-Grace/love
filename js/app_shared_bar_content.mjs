import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear_context } from "./html_clear_context.mjs";
import { app_shared_bar_content_root } from "./app_shared_bar_content_root.mjs";
import { app_shared_bar_content_root_frame } from "./app_shared_bar_content_root_frame.mjs";
export function app_shared_bar_content(context) {
  arguments_assert(arguments, 1);
  ("the frame every screen in these apps opens with - the page emptied of the last screen, and the bar and the scrolling body under it, handed back by name");
  ("six screens began with these same four lines and each named the two halves in whichever order it happened to want them, so the frame had no name of its own and reading one screen told you nothing about the next.");
  let root = html_clear_context(context);
  let bc = app_shared_bar_content_root(root);
  let frame = app_shared_bar_content_root_frame(bc, root);
  return frame;
}
