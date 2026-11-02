import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
import { emoji_sunrise } from "./emoji_sunrise.mjs";
export function reply_response_good_morning() {
  arguments_assert(arguments, 0);
  ("What goes back to somebody who says good morning: the same words, with a sunrise.");
  let left = emoji_sunrise();
  let said = text_combine(left, " Good morning!");
  return said;
}
