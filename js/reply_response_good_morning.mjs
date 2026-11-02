import { arguments_assert } from "./arguments_assert.mjs";
import { emoji_sunrise } from "./emoji_sunrise.mjs";
import { reply_response_dressed } from "./reply_response_dressed.mjs";
import { text_combine } from "./text_combine.mjs";
export function reply_response_good_morning() {
  arguments_assert(arguments, 0);
  ("What goes back to somebody who says good morning: the same words, with a sunrise.");
  let left = emoji_sunrise();
  let right = reply_response_dressed("Good morning!");
  let said = text_combine(left, right);
  return said;
}
