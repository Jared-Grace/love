import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function gloss_bible_sound_word_same(chapter_code, verse_numbers, word) {
  "$plain chapter_code";
  "$plain word";
  "The recording name for a word in these verses when an app has only one recording per word: the word itself, whatever the verse.";
  ("It exists so an app whose recordings do not depend on the verse can hand something to a page that asks every app the same question; ",
    fn_name("english_word_sound_verse_word"),
    " is the answer for an app whose recordings do.");
  arguments_assert(arguments, 3);
  return word;
}
