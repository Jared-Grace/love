import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
import { emoji_sunset } from "./emoji_sunset.mjs";
import { reply_response_dressed } from "./reply_response_dressed.mjs";
export function reply_response_good_evening() {
  arguments_assert(arguments, 0);
  ("What goes back to somebody who says good evening: the same words, with a sunset.");
  let left = emoji_sunset();
  let right = reply_response_dressed("Good evening!");
  let said = text_combine(left, right);
  return said;
}
