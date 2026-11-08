import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_language_en_code } from "./ebible_language_en_code.mjs";
import { app_shared_text_reader_language_sites } from "./app_shared_text_reader_language_sites.mjs";
import { null_is } from "./null_is.mjs";
import { js_literal_value_deep_try } from "./js_literal_value_deep_try.mjs";
import { app_shared_text_language_codes } from "./app_shared_text_language_codes.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_without } from "./list_without.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { js_file_fn_name } from "./js_file_fn_name.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
export async function app_shared_text_reader_language_absent(language_code) {
  "$plain language_code";
  "Every saying already translated into some language but not yet into this one, each with the function it stands in and the english it says.";
  "A saying with no translation at all is passed over. It is english on purpose or not yet looked at, and either way a new language is no reason to start on it before the languages already there have.";
  "The english is handed back as written, gaps and all, because the translation has to keep the same gaps for the words that fill them.";
  arguments_assert(arguments, 1);
  let en = ebible_language_en_code();
  let sites = await app_shared_text_reader_language_sites();
  let absent = [];
  for (let site of sites) {
    let unwritten = null_is(site.object);
    if (unwritten) {
      continue;
    }
    let saying = js_literal_value_deep_try(site.object);
    let unreadable = null_is(saying);
    if (unreadable) {
      continue;
    }
    let codes = app_shared_text_language_codes(saying);
    let english = list_includes(codes, en);
    if (not(english)) {
      continue;
    }
    let translations = list_without(codes, en);
    let english_only = list_empty_is(translations);
    if (english_only) {
      continue;
    }
    let present = list_includes(codes, language_code);
    if (present) {
      continue;
    }
    let f_name = js_file_fn_name(site.file);
    let words = property_get(saying, en);
    list_add(absent, {
      f_name,
      words,
    });
  }
  return absent;
}
