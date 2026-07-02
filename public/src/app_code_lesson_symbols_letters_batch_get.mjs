import { app_code_verse_words } from "../../../love/public/src/app_code_verse_words.mjs";
import { list_map_multiple } from "../../../love/public/src/list_map_multiple.mjs";
import { text_split_empty } from "../../../love/public/src/text_split_empty.mjs";
import { text_letters_only } from "../../../love/public/src/text_letters_only.mjs";
export function app_code_lesson_symbols_letters_batch_get(mapper) {
  let mappers = [text_letters_only, mapper, text_split_empty];
  let split = app_code_verse_words();
  let mapped = list_map_multiple(split, mappers);
  return mapped;
}
