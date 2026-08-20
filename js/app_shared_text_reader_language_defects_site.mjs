import { arguments_assert } from "./arguments_assert.mjs";
import { property_count_add } from "./property_count_add.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { js_literal_value_deep_try } from "./js_literal_value_deep_try.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { app_shared_text_reader_language_from_key } from "./app_shared_text_reader_language_from_key.mjs";
import { list_without } from "./list_without.mjs";
import { ebible_language_en_code } from "./ebible_language_en_code.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
export function app_shared_text_reader_language_defects_site(
  sites,
  picked,
  defects,
  languages,
  counted,
) {
  arguments_assert(arguments, 5);
  for (let site of sites) {
    property_count_add(picked, site.picker, 1);
    let missing = null_is(site.object);
    if (missing) {
      list_add(defects, {
        file: site.file,
        reason:
          "the sayings are not written out at the place they are used, so they cannot be counted without running the app",
      });
      continue;
    }
    ("the whole saying is read and not only which languages it names, because what each language actually says is now part of what is being checked - a translation records the english it was made from, and that record can only be laid beside the english by somebody holding both");
    let saying = js_literal_value_deep_try(site.object);
    let unreadable = null_is(saying);
    if (unreadable) {
      list_add(defects, {
        file: site.file,
        reason:
          "some of this saying is worked out rather than written, so neither the languages it has nor what it says in them can be read off the page",
      });
      continue;
    }
    let named = object_property_names(saying);
    let from_key = app_shared_text_reader_language_from_key();
    let codes = list_without(named, from_key);
    let en = ebible_language_en_code();
    let english = list_includes(codes, en);
    if (not(english)) {
      list_add(defects, {
        file: site.file,
        reason:
          "there is no english saying here, and english is the one every reader falls back to",
      });
      continue;
    }
    for (let code of codes) {
      let known = list_includes(languages, code);
      if (not(known)) {
        list_add(languages, code);
      }
    }
    list_add(counted, {
      file: site.file,
      codes,
      saying,
    });
  }
}
