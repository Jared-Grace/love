import { html_clear_context } from "./html_clear_context.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_column_max_width } from "./app_shared_column_max_width.mjs";
import { app_shared_content_center_padding } from "./app_shared_content_center_padding.mjs";
import { app_bible_button_back_to_reader } from "./app_bible_button_back_to_reader.mjs";
export async function app_bible_screen_content(context) {
  "the opening every bible screen away from the reader shares - a cleared context, a fresh content child holding the shared reading column, and the way back to the reader above it";
  "the child is made fresh here and the padding goes on it, never on the persistent context root - the reason is written where the padding is done";
  let root = html_clear_context(context);
  let content = html_div(root);
  app_shared_content_column_pad(content);
  await app_bible_button_back_to_reader(content, context);
  let r = {
    root,
    content,
  };
  return r;
}
