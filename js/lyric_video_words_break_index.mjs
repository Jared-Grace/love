import { arguments_assert } from "./arguments_assert.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { lyric_video_words_word_text } from "./lyric_video_words_word_text.mjs";
import { text_ends_with_any } from "./text_ends_with_any.mjs";
import { add } from "./add.mjs";
export function lyric_video_words_break_index(
  opened,
  reached,
  look_back,
  words,
  marks,
) {
  arguments_assert(arguments, 5);
  let earliest = subtract(reached, look_back);
  let back = subtract(reached, 1);
  while (greater_than(back, opened) && greater_than_equal(back, earliest)) {
    let text = lyric_video_words_word_text(back, words);
    let marked = text_ends_with_any(text, marks);
    if (marked) {
      let after = add(back, 1);
      return after;
    }
    back = subtract(back, 1);
  }
  return reached;
}
