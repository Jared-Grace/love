import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { emoji_trinity } from "./emoji_trinity.mjs";
export function reply_choices_glory() {
  let v2 = emoji_pray();
  let v3 = emoji_trinity();
  let v = text_combine_multiple([
    v2,
    " All glory to the name of God ",
    v3,
    " ! ",
  ]);
  return v;
}
