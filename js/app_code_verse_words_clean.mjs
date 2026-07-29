import { app_code_verse_words } from "./app_code_verse_words.mjs";
import { text_replace } from "./text_replace.mjs";
import { list_map } from "./list_map.mjs";
export function app_code_verse_words_clean() {
  "the shared verse words with commas removed, so each is a clean single-word string value - single-sourced for the string lessons that use the verse one word at a time";
  let words = app_code_verse_words();
  function clean(word) {
    "one verse word with its comma (if any) removed";
    let stripped = text_replace(word, ",", "");
    return stripped;
  }
  let cleaned = list_map(words, clean);
  return cleaned;
}
