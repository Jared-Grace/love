import { emoji_smile } from "../../../love/public/src/emoji_smile.mjs";
import { emoji_pray } from "../../../love/public/src/emoji_pray.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function app_reply_choices_thanks() {
  let v2 = text_combine_multiple([
    emoji_pray(),
    " Thank you very much! ",
    emoji_smile(),
  ]);
  return v2;
}
