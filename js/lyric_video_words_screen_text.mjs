import { arguments_assert } from "./arguments_assert.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
import { lyric_video_words_word_text } from "./lyric_video_words_word_text.mjs";
import { add } from "./add.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function lyric_video_words_screen_text(from, to, words) {
  arguments_assert(arguments, 3);
  let parts = [];
  let at = from;
  while (less_than(at, to)) {
    let started = greater_than(at, from);
    if (started) {
      list_add(parts, " ");
    }
    let item = lyric_video_words_word_text(at, words);
    list_add(parts, item);
    at = add(at, 1);
  }
  let text = text_combine_multiple(parts);
  return text;
}
