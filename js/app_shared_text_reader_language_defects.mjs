import { js_literal_value_deep_try } from "./js_literal_value_deep_try.mjs";
import { app_shared_text_reader_language_from_key } from "./app_shared_text_reader_language_from_key.mjs";
import { list_without } from "./list_without.mjs";
import { app_shared_text_reader_language_drifted } from "./app_shared_text_reader_language_drifted.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { app_shared_text_reader_language_pickers } from "./app_shared_text_reader_language_pickers.mjs";
import { list_map } from "./list_map.mjs";
import { js_file_name } from "./js_file_name.mjs";
import { text_includes_multiple_is } from "./text_includes_multiple_is.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { js_files_texts } from "./js_files_texts.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { ebible_language_en_code } from "./ebible_language_en_code.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { property_set } from "./property_set.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function app_shared_text_reader_language_defects() {
  "Every place a button's saying is handed to the reader in one language and not in the others, and every place the sayings are not written out where they can be counted.";
  "The set of languages is not written down anywhere and is not asked for. It is whatever the sayings between them already offer, so the first button to gain a language asks every other button for it, and nobody has to remember to widen a list that would otherwise be the one thing left behind.";
  "The whole folder is read rather than an index of who calls what. An index is built at some moment and answers for that moment; a button added since would be missing from it, and a gate that cannot see the newest thing is red exactly when it does not matter and green exactly when it does.";
  "The saying has to stand written out at the place it is used, as words and nothing else. Worked out at the time it is wanted it could still be right, and no reading of the files could show that it was - so what cannot be counted without running the app is a defect here even when the app is fine.";
  "Where the places are and which of them count is asked elsewhere, because the change that repairs what is complained about here has to walk exactly the same set. Asked twice they could differ, and the repair would then quietly fix something other than what was named.";
  let sites = await app_shared_text_reader_language_sites();
  let defects = [];
  let languages = [];
  let counted = [];
  for (let site of sites) {
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
  let drifted = app_shared_text_reader_language_drifted(counted);
  list_add_multiple(defects, drifted);
  for (let site of counted) {
    for (let code of languages) {
      let has = list_includes(site.codes, code);
      if (not(has)) {
        list_add(defects, {
          file: site.file,
          reason:
            "another button here says its piece in " +
            code +
            " and this one does not, so a reader of it meets one english word in a page of their own language",
        });
      }
    }
  }
  let r = {
    defects,
    languages,
    sites: counted.length,
  };
  return r;
}
