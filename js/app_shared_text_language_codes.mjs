import { arguments_assert } from "./arguments_assert.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_filter_equal_not } from "./list_filter_equal_not.mjs";
export function app_shared_text_language_codes(texts) {
  arguments_assert(arguments, 1);
  ("The languages one saying has been written into.");
  ("A saying is kept as a language code against the words in that language, and beside them a record of which English the other languages were made from. That record is not a language and nobody is ever shown it, so it is taken back off here rather than left for each reader of the saying to remember to skip.");
  ("Asked of the saying rather than of the repo, because what is written down is what can be shown. A language this app knows about but has not written this saying into would come back as a promise the saying cannot keep.");
  let names = object_property_names(texts);
  let name_from = "translated_from";
  let codes = list_filter_equal_not(names, name_from);
  return codes;
}
