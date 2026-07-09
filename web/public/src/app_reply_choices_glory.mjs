import { emoji_trinity } from "../../../love/public/src/emoji_trinity.mjs";
import { emoji_pray } from "../../../love/public/src/emoji_pray.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function app_reply_choices_glory() {
  let v = text_combine_multiple([
    emoji_pray(),
    " All glory to God ",
    emoji_trinity(),
    " ! ",
  ]);
  return v;
}
