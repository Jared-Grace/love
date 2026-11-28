import { arguments_assert } from "./arguments_assert.mjs";
import { null_is } from "./null_is.mjs";
export function gloss_bible_sound_get_placed(
  url_get,
  sound_word_get,
  chapter_code,
  verse_numbers,
) {
  "$plain chapter_code";
  "A way of asking for one word's recording that already knows which verses the word sits in, so the row drawing it can go on asking with the word alone.";
  "No recordings stays no recordings: a page handed nothing to ask with is handed nothing back, so it still draws no speaker.";
  arguments_assert(arguments, 4);
  if (null_is(url_get)) {
    return null;
  }
  function placed(word) {
    let spoken = sound_word_get(chapter_code, verse_numbers, word);
    let url = url_get(spoken);
    return url;
  }
  return placed;
}
