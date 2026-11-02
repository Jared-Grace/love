import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
import { emoji_sun } from "./emoji_sun.mjs";
import { reply_response_dressed } from "./reply_response_dressed.mjs";
export function reply_response_good_afternoon() {
  arguments_assert(arguments, 0);
  ("What goes back to somebody who says good afternoon: the same words, with a sun.");
  let left = emoji_sun();
  let right = reply_response_dressed("Good afternoon!");
  let said = text_combine(left, right);
  return said;
}
