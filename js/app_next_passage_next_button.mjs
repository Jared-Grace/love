import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_centered } from "./html_centered.mjs";
import { emoji_arrow_right } from "./emoji_arrow_right.mjs";
import { text_combine_middle_space } from "./text_combine_middle_space.mjs";
import { html_hash_set_object } from "./html_hash_set_object.mjs";
import { app_shared_refresh } from "./app_shared_refresh.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
export function app_next_passage_next_button(parent, context, hash_onward) {
  "The way on to the next passage in the large form, where the copied link points back at this passage rather than onward. The page moves on where it stands, keeping the big word, so the next passage is big too and ready to copy.";
  arguments_assert(arguments, 3);
  let row = html_div(parent);
  html_centered(row);
  let sign = emoji_arrow_right();
  let text = text_combine_middle_space("Next passage", sign);
  async function lambda() {
    html_hash_set_object(hash_onward);
    await app_shared_refresh(context);
  }
  let component = app_shared_button(row, text, lambda);
  return component;
}
