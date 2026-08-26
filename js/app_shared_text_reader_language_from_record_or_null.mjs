import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_text_reader_language_from_key } from "./app_shared_text_reader_language_from_key.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
export function app_shared_text_reader_language_from_record_or_null(texts) {
  arguments_assert(arguments, 1);
  ("The record one saying keeps of which english each of its translations was made from, or nothing where the saying has never said.");
  ("Nothing rather than an empty record, because the two mean different things. An empty record is a saying that has been through the writer and had nothing to record; nothing at all is a saying the writer has never reached, which is exactly the defect the readers of this are looking for.");
  ("Asked here rather than at each of the four places that ask it, so that the word the record is kept under is written down in one place and read in one place.");
  let from_key = app_shared_text_reader_language_from_key();
  let record = property_get_or_null(texts, from_key);
  return record;
}
