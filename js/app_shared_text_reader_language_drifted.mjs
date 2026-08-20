import { property_equals_json } from "./property_equals_json.mjs";
import { app_shared_text_reader_language_from_key } from "./app_shared_text_reader_language_from_key.mjs";
import { ebible_language_en_code } from "./ebible_language_en_code.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_without } from "./list_without.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
export function app_shared_text_reader_language_drifted(counted) {
  "Every translation whose english has been edited since it was made, and every one that never said which english it was made from.";
  "Editing the english is the whole hazard, and on its own it is invisible. Nothing breaks, no count changes, the button still works, and the translation beneath it is now a translation of a sentence that is no longer there - which reads as fluent writing to the one person who cannot check it. So each translation writes down the english it was made from, and the two are laid beside each other here.";
  "A saying with no translations records nothing and is asked for nothing. There is nothing to have gone stale, and demanding a record of an english that was never turned into anything would make the ordinary case the loud one.";
  "A record naming a language the saying no longer has is a defect too. It is what a removed translation leaves behind, and left there it would go on quietly agreeing with the english forever while saying nothing about anything.";
  let en = ebible_language_en_code();
  let from_key = app_shared_text_reader_language_from_key();
  let defects = [];
  for (let site of counted) {
    let file = property_get(site, "file");
    let codes = property_get(site, "codes");
    let saying = property_get(site, "saying");
    let translations = list_without(codes, en);
    let english_only = list_empty_is(translations);
    if (english_only) {
      continue;
    }
    let record = property_get_or_null(saying, from_key);
    let unrecorded = null_is(record);
    if (unrecorded) {
      list_add(defects, {
        file,
        reason:
          "nothing here says which english these translations were made from, so an edit to the english would leave them stale with nothing to notice it",
      });
      continue;
    }
    let english = property_get(saying, en);
    let recorded = object_property_names(record);
    for (let code of translations) {
      let held = list_includes(recorded, code);
      if (not(held)) {
        list_add(defects, {
          file,
          reason:
            "nothing here says which english the " +
            code +
            " was made from, so an edit to the english would leave it stale with nothing to notice it",
        });
        continue;
      }
      let same = property_equals_json(record, code, english);
      if (not(same)) {
        list_add(defects, {
          file,
          reason:
            "the english has been edited since this was turned into " +
            code +
            ", so the " +
            code +
            " now says something the english no longer says",
        });
      }
    }
    for (let code of recorded) {
      let still = list_includes(translations, code);
      if (not(still)) {
        list_add(defects, {
          file,
          reason:
            "there is a record of the english the " +
            code +
            " was made from, and no " +
            code +
            " here for it to belong to",
        });
      }
    }
  }
  return defects;
}
