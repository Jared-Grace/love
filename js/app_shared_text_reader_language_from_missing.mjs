import { list_without_multiple } from "./list_without_multiple.mjs";
import { app_shared_text_reader_language_from_key } from "./app_shared_text_reader_language_from_key.mjs";
import { app_shared_text_reader_language_sites } from "./app_shared_text_reader_language_sites.mjs";
import { ebible_language_en_code } from "./ebible_language_en_code.mjs";
import { js_file_fn_name } from "./js_file_fn_name.mjs";
import { js_literal_value_deep_try } from "./js_literal_value_deep_try.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_without } from "./list_without.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
export async function app_shared_text_reader_language_from_missing() {
  "The name of every function holding a translation that never said which english it was made from, each named once however many of its sayings are short of the record.";
  "Named once because the change that fills them in works on a whole function at a time. A name repeated would be that change asked to run twice over a function it had already finished, and the second run would have nothing to do and would say so as though something were wrong.";
  "A saying with no translations is not short of anything and is not named. There is nothing that could have gone stale, so asking it for a record of an english it never turned into anything would make the ordinary case the loud one.";
  let en = ebible_language_en_code();
  let from_key = app_shared_text_reader_language_from_key();
  let sites = await app_shared_text_reader_language_sites();
  let f_names = [];
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
    let named = object_property_names(saying);
    let codes = list_without(named, from_key);
    let english = list_includes(codes, en);
    if (not(english)) {
      continue;
    }
    let translations = list_without(codes, en);
    let english_only = list_empty_is(translations);
    if (english_only) {
      continue;
    }
    let record = property_get_or_null(saying, from_key);
    let recorded = [];
    let unrecorded = null_is(record);
    if (not(unrecorded)) {
      recorded = object_property_names(record);
    }
    let short = list_without_multiple(translations, recorded);
    let complete = list_empty_is(short);
    if (complete) {
      continue;
    }
    let f_name = js_file_fn_name(site.file);
    let already = list_includes(f_names, f_name);
    if (already) {
      continue;
    }
    list_add(f_names, f_name);
  }
  return f_names;
}
