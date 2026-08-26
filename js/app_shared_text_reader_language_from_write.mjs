import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_language_en_code } from "./ebible_language_en_code.mjs";
import { app_shared_text_language_codes } from "./app_shared_text_language_codes.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_without } from "./list_without.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_text_reader_language_from_record_or_null } from "./app_shared_text_reader_language_from_record_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_null_is } from "./property_null_is.mjs";
import { property_set } from "./property_set.mjs";
import { app_shared_text_reader_language_from_record_set } from "./app_shared_text_reader_language_from_record_set.mjs";
import { app_shared_text_reader_language_sayings_change } from "./app_shared_text_reader_language_sayings_change.mjs";
export async function app_shared_text_reader_language_from_write(f_name) {
  "$plain f_name";
  "Writes into every saying in one function the english each of its translations was made from, wherever that has never been written down, so that a later edit to the english can be seen to have left the translations behind it.";
  "It only ever adds. A record already standing is the evidence that an edit happened, and writing over it would answer the complaint by destroying what raised it - the translation would go on saying what it always said, and nothing would be left to say so.";
  "So what it claims is exactly true of a translation made against the english now on the page and never true of one that was not. It is for the moment a translation is written down, and for a body of translations known to have been written against the english as it stands.";
  arguments_assert(arguments, 1);
  let en = ebible_language_en_code();
  function lambda$saying(saying) {
    let codes = app_shared_text_language_codes(saying);
    let english = list_includes(codes, en);
    if (not(english)) {
      return null;
    }
    let translations = list_without(codes, en);
    let english_only = list_empty_is(translations);
    if (english_only) {
      return null;
    }
    let words = property_get(saying, en);
    let standing = app_shared_text_reader_language_from_record_or_null(saying);
    let record = {};
    let unrecorded = null_is(standing);
    if (not(unrecorded)) {
      record = standing;
    }
    let filled = false;
    for (let code of translations) {
      let absent = property_null_is(record, code);
      if (absent) {
        property_set(record, code, words);
        filled = true;
      }
    }
    if (not(filled)) {
      return null;
    }
    app_shared_text_reader_language_from_record_set(saying, record);
    return saying;
  }
  let output = await app_shared_text_reader_language_sayings_change(
    f_name,
    lambda$saying,
  );
  return output;
}
