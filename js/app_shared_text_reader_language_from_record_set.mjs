import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_text_reader_language_from_key } from "./app_shared_text_reader_language_from_key.mjs";
import { property_set } from "./property_set.mjs";
export function app_shared_text_reader_language_from_record_set(texts, record) {
  arguments_assert(arguments, 2);
  ("Puts on one saying the record of which english each of its translations was made from.");
  ("The other half of the pair that reads it. A record kept under a word only one function spells is a record only one function can lose track of; split across the places that write it, the word has to be spelled again at each of them and a saying could be given its record under a word nobody looks for.");
  let from_key = app_shared_text_reader_language_from_key();
  property_set(texts, from_key, record);
}
