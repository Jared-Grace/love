import { app_code_verse_words } from "./app_code_verse_words.mjs";
import { list_map_multiple } from "./list_map_multiple.mjs";
import { text_letters_only } from "./text_letters_only.mjs";
export function app_code_lesson_symbols_letters_batch_get(mapper) {
  let split = app_code_verse_words();
  let mappers = [text_letters_only, mapper];
  let mapped = list_map_multiple(split, mappers);
  return mapped;
}
