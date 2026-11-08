import { app_shared_text_reader_language_held_change } from "./app_shared_text_reader_language_held_change.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_language_en_code } from "./ebible_language_en_code.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { app_shared_text_language_codes } from "./app_shared_text_language_codes.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_without } from "./list_without.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { property_get } from "./property_get.mjs";
import { json_equal } from "./json_equal.mjs";
import { list_find_or_null } from "./list_find_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { app_shared_text_reader_language_from_record_or_null } from "./app_shared_text_reader_language_from_record_or_null.mjs";
import { property_set } from "./property_set.mjs";
import { app_shared_text_reader_language_from_record_set } from "./app_shared_text_reader_language_from_record_set.mjs";
import { app_shared_text_reader_language_sayings_change } from "./app_shared_text_reader_language_sayings_change.mjs";
export async function app_shared_text_reader_language_translation_write(
  f_name,
  language_code,
  translations_path,
) {
  "$plain f_name";
  "$plain language_code";
  "Writes one language into every saying in one function whose english has a translation in the list at this path, along with the record of which english it was made from.";
  "The list is of pairs, each the english exactly as a saying writes it and the words in the new language, so a translation lands only on a saying that says that english now. A saying whose english has moved on since the list was made is left alone rather than given words made for something it no longer says.";
  "It only ever adds. A saying already written into this language keeps what it has, because replacing words somebody chose is a different act from filling in words nobody has.";
  "The record of what the translation was made from is written in the same step, since the moment a translation is put down is the one moment that record is certainly true.";
  arguments_assert(arguments, 3);
  let en = ebible_language_en_code();
  let pairs = await file_read_json(translations_path);
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
    let present = list_includes(codes, language_code);
    if (present) {
      return null;
    }
    let words = property_get(saying, en);
    function lambda$pair(pair) {
      let left = property_get(pair, "en");
      let same = json_equal(left, words);
      return same;
    }
    let pair = list_find_or_null(pairs, lambda$pair);
    let unmatched = null_is(pair);
    if (unmatched) {
      return null;
    }
    let standing = app_shared_text_reader_language_from_record_or_null(saying);
    let record = {};
    let unrecorded = null_is(standing);
    if (not(unrecorded)) {
      record = standing;
    }
    let changed = {};
    for (let code of codes) {
      let value = property_get(saying, code);
      property_set(changed, code, value);
    }
    let value2 = property_get(pair, "translation");
    property_set(changed, language_code, value2);
    property_set(record, language_code, words);
    app_shared_text_reader_language_from_record_set(changed, record);
    return changed;
  }
  let output = await app_shared_text_reader_language_sayings_change(
    f_name,
    lambda$saying,
  );
  async function lambda(saying2) {}
  let output2 = await app_shared_text_reader_language_held_change(
    f_name,
    lambda$saying,
  );
  return output;
}
