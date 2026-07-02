import { list_map_multiple } from "../../../love/public/src/list_map_multiple.mjs";
import { text_split_space } from "../../../love/public/src/text_split_space.mjs";
import { text_split_empty } from "../../../love/public/src/text_split_empty.mjs";
import { text_letters_only } from "../../../love/public/src/text_letters_only.mjs";
export function app_code_lesson_symbols_letters_batch_get(mapper) {
  let mappers = [text_letters_only, mapper, text_split_empty];
  let verse =
    "For God so loved the world that He gave His one and only Son, that everyone who believes in Him shall not perish but have eternal life";
  let split = text_split_space(verse);
  let mapped = list_map_multiple(split, mappers);
  return mapped;
}
