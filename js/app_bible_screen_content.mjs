import { html_clear_context } from "./html_clear_context.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_column_max_width } from "./app_shared_column_max_width.mjs";
import { app_shared_content_center_padding } from "./app_shared_content_center_padding.mjs";
import { app_bible_button_back_to_reader } from "./app_bible_button_back_to_reader.mjs";
export async function app_bible_screen_content(context) {
  "the opening every bible screen away from the reader shares - a cleared context, a fresh content child holding the shared reading column, and the way back to the reader above it";
  "pad a FRESH content child, never the persistent context root - the root survives navigation, so padding it leaves the column padding stuck on the body and it stacks with the reader's own padding next time, squeezing verses to one word per line";
  "the two screens that opened this way each carried their own copy of that warning, and the copies had already stopped saying the same thing - one named why the root survives and the other did not";
  let root = html_clear_context(context);
  let content = html_div(root);
  let column = app_shared_column_max_width();
  app_shared_content_center_padding(content, column);
  await app_bible_button_back_to_reader(content, context);
  let r = {
    root,
    content,
  };
  return r;
}
