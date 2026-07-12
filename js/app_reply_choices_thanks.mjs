import { emoji_smile } from "./emoji_smile.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_reply_choices_thanks() {
  let v = text_combine_multiple([
    emoji_pray(),
    " Thank you very much! ",
    emoji_smile(),
  ]);
  return v;
}
