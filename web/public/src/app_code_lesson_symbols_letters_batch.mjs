import { list_map_multiple } from "../../../love/public/src/list_map_multiple.mjs";
import { text_split_empty } from "../../../love/public/src/text_split_empty.mjs";
import { text_lower_to } from "../../../love/public/src/text_lower_to.mjs";
import { text_letters_only } from "../../../love/public/src/text_letters_only.mjs";
import { text_split_space } from "../../../love/public/src/text_split_space.mjs";
export function app_code_lesson_symbols_letters_batch() {
  function batch_get() {
    let verse =
      "For God so loved the world that He gave His one and only Son, that everyone who believes in Him shall not perish but have eternal life";
    let split = text_split_space(verse);
    let mappers = [text_letters_only, text_lower_to, text_split_empty];
    let mapped = list_map_multiple(split, mappers);
    return mapped;
  }
  return batch_get;
}
