import { app_shared_content_column_pad } from "./app_shared_content_column_pad.mjs";
import { html_clear_context } from "./html_clear_context.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_bible_button_back_to_reader } from "./app_shared_bible_button_back_to_reader.mjs";
export async function app_shared_bible_screen_content(context) {
  "the opening every bible screen away from the reader shares - a cleared context, a fresh content child holding the shared reading column, and the way back to the reader above it";
  "the child is made fresh here and the padding goes on it, never on the persistent context root - the reason is written where the padding is done";
  let root = html_clear_context(context);
  let content = html_div(root);
  app_shared_content_column_pad(content);
  await app_shared_bible_button_back_to_reader(content, context);
  let r = {
    root,
    content,
  };
  return r;
}
