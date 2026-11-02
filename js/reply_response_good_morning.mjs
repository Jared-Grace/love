import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { emoji_sunrise } from "./emoji_sunrise.mjs";
import { emoji_wave } from "./emoji_wave.mjs";
import { emoji_smile } from "./emoji_smile.mjs";
import { emoji_cross } from "./emoji_cross.mjs";
export function reply_response_good_morning() {
  arguments_assert(arguments, 0);
  ("What goes back to somebody who says good morning: the same words, with a sunrise, dressed as the greeting is dressed.");
  let v = emoji_sunrise();
  let v2 = emoji_wave();
  let v3 = emoji_smile();
  let v4 = emoji_cross();
  let said = text_combine_multiple([v, v2, v3, " Good morning! ", v4]);
  return said;
}
