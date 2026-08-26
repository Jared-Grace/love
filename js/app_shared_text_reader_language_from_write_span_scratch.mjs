import { arguments_assert } from "./arguments_assert.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { app_shared_text_reader_language_from_key } from "./app_shared_text_reader_language_from_key.mjs";
import { list_without } from "./list_without.mjs";
export function app_shared_text_reader_language_from_write_span_scratch(
  saying,
) {
  arguments_assert(arguments, 1);
  let named = object_property_names(saying);
  let item = app_shared_text_reader_language_from_key();
  let codes = list_without(named, item);
  return codes;
}
