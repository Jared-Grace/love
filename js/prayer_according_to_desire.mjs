import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
export function prayer_according_to_desire() {
  let v = emoji_pray();
  let line = text_combine_multiple([
    v,
    " ",
    "According to the desire of God, may there be prayer",
  ]);
  return line;
}
