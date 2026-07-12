import { emoji_trinity } from "./emoji_trinity.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_reply_choices_glory() {
  let v = text_combine_multiple([
    emoji_pray(),
    " All glory to God ",
    emoji_trinity(),
    " ! ",
  ]);
  return v;
}
