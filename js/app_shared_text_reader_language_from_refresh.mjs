import { app_shared_text_reader_language_from_key } from "./app_shared_text_reader_language_from_key.mjs";
import { app_shared_text_reader_language_sayings_change } from "./app_shared_text_reader_language_sayings_change.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_language_en_code } from "./ebible_language_en_code.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { property_set } from "./property_set.mjs";
export async function app_shared_text_reader_language_from_refresh(
  f_name,
  code,
) {
  "$plain f_name";
  "$plain code";
  "Says of one language's translations in one function that they were made from the english standing there now - what somebody runs once they have actually gone and made them again.";
  "This is the only thing that clears a saying named as left behind, and it has to be a thing somebody does on purpose, by name, one language and one function at a time. Anything that cleared the naming as a side effect of running would clear it whether or not the work behind it was done.";
  "It says nothing about whether the new translation is any good, and cannot. What it records is which english somebody was looking at, and the one person who can say the words are right is the one who wrote them.";
  arguments_assert(arguments, 2);
  let en = ebible_language_en_code();
  let from_key = app_shared_text_reader_language_from_key();
  function lambda$saying(saying) {
    let named = object_property_names(saying);
    let english = list_includes(named, en);
    if (not(english)) {
      return null;
    }
    let translated = list_includes(named, code);
    if (not(translated)) {
      return null;
    }
    let words = property_get(saying, en);
    let standing = property_get_or_null(saying, from_key);
    let record = {};
    let unrecorded = null_is(standing);
    if (not(unrecorded)) {
      record = standing;
    }
    property_set(record, code, words);
    property_set(saying, from_key, record);
    return saying;
  }
  let output = await app_shared_text_reader_language_sayings_change(
    f_name,
    lambda$saying,
  );
  return output;
}
