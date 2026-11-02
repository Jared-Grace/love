import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { emoji_wave } from "./emoji_wave.mjs";
import { emoji_smile } from "./emoji_smile.mjs";
import { emoji_cross } from "./emoji_cross.mjs";
export function reply_response_dressed(words) {
  arguments_assert(arguments, 1);
  ("Words going back to somebody, dressed the way every greeting here is dressed: a wave and a smile before them, a cross after.");
  let v = emoji_wave();
  let v2 = emoji_smile();
  let v3 = emoji_cross();
  let dressed = text_combine_multiple([v, v2, " ", words, " ", v3]);
  return dressed;
}
