import { gloss_affix_kinds_drafts_file_path } from "./gloss_affix_kinds_drafts_file_path.mjs";
import { file_read_json_exists_ensure } from "./file_read_json_exists_ensure.mjs";
import { gloss_repairs_file_path } from "./gloss_repairs_file_path.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function gloss_affix_kinds_drafts_promote_generic(fn) {
  "The read drafts moved into the repairs file the store's repair step reads, answered for by what moved and what was left standing.";
  "Nothing is applied here and nothing is asked of the service. This only moves sentences between two files, and the step that puts them in the store is the one that already exists - which is why a draft that turns out wrong costs a deletion rather than a repair.";
  "A word the repairs file already holds is never overwritten. That entry was authored and read by a person, and a machine draft arriving later has no claim over it; the word comes back named so the person can see the two disagreed at all.";
  "The drafts file is left exactly as it stands, because promoting is not the same as being finished with a draft - a re-run must be able to show what was promoted and a cleared file could not.";
  let path_drafts = gloss_affix_kinds_drafts_file_path(fn);
  let drafts = await file_read_json_exists_ensure(path_drafts);
  let path_repairs = gloss_repairs_file_path(fn);
  let repairs = await file_read_json_exists_ensure(path_repairs);
  let moved = [];
  let refused = [];
  let chapter_codes = object_property_names(drafts);
  function chapter_promote(chapter_code) {
    let words = property_get(drafts, chapter_code);
    let held = property_get_or_null(repairs, chapter_code);
    let chapter_repairs = held;
    if (null_is(held)) {
      chapter_repairs = {};
    }
    function word_promote(word) {
      let standing = property_get_or_null(chapter_repairs, word);
      if (null_is(standing)) {
        let explain = property_get(words, word);
        property_set(chapter_repairs, word, explain);
        list_add(moved, {
          chapter_code,
          word,
        });
        return;
      }
      list_add(refused, {
        chapter_code,
        word,
      });
    }
    let names = object_property_names(words);
    each(names, word_promote);
    property_set(repairs, chapter_code, chapter_repairs);
  }
  each(chapter_codes, chapter_promote);
  await file_overwrite_json(path_repairs, repairs);
  let r = {
    path_repairs,
    moved,
    refused,
  };
  return r;
}
