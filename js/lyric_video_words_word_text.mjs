import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function lyric_video_words_word_text(order_word, words) {
  arguments_assert(arguments, 2);
  let word = words[order_word];
  let text = property_get(word, "word");
  return text;
}
