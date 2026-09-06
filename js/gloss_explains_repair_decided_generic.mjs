import { gloss_repairs_file_path } from "./gloss_repairs_file_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { add } from "./add.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { gloss_passage_entries_changed_set } from "./gloss_passage_entries_changed_set.mjs";
import { list_size } from "./list_size.mjs";
import { gloss_chapter_passages_repair_generic } from "./gloss_chapter_passages_repair_generic.mjs";
import { list_includes } from "./list_includes.mjs";
import { each_async } from "./each_async.mjs";
export async function gloss_explains_repair_decided_generic(
  fn,
  entry_wanted_is,
) {
  "One named gloss store with the corrected explanations handed to it put in place, but only where a decision handed in says that sighting wants replacing - answered for by how many were set, how many were left alone, and which of the words asked for were never found.";
  "$plain fn";
  "★ THE HANDOVER FILE NAMES A WORD AND THE REPAIR FINDS EVERY SIGHTING OF IT, SO A WORD MET A THOUSAND TIMES IS A THOUSAND SENTENCES REPLACED WHETHER OR NOT THEY WERE WRONG. Measured 2026-09-06 over the Cebuano store: the two hundred and seventy-five words still to write for carry ten thousand two hundred and forty-six sightings between them, and nine thousand seven hundred and eighty-eight of those already say what they should. Draining that list by word would overwrite about twenty-one sound explanations for every faulty one it put right. The fault is per sighting and the repair was keyed on the word, which is one level too coarse.";
  "So the decision is handed in rather than settled here. What counts as a sighting worth replacing is a question about the store's own prose, and it differs by store and by what the reading found; the walk over the chapters is the same either way, and that walk is the only thing this owes its caller.";
  "The decision is asked in the small, sync, over the word and the sentence already standing, because it is asked once per entry inside a walk that cannot wait. Anything a decision needs looked up - a dictionary root, a list of chapters - is looked up by the caller before it hands the decision over, and closed over.";
  "A word passed over still counts as found. It was met, and the sentence written for it was simply not wanted there; reporting it missing would send a reader to correct a handover file that is perfectly right, which is the one thing the missing list exists to prevent.";
  let path = gloss_repairs_file_path(fn);
  let repairs = await file_read_json(path);
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let explain_key = gloss_entry_explain_key();
  let chapter_codes = object_property_names(repairs);
  let entries_total = 0;
  let passed_over = 0;
  let missing = [];
  async function chapter_repair(chapter_code) {
    let wanted = property_get(repairs, chapter_code);
    let words = object_property_names(wanted);
    let found = [];
    function passage_read(passage) {
      let entries = gloss_passage_entries(passage);
      let changes = [];
      function entry_read(entry) {
        let word = property_get(entry, word_key);
        let explain = property_get_or_null(wanted, word);
        if (null_is(explain)) {
          return;
        }
        list_add(found, word);
        let standing = property_get(entry, explain_key);
        let replace_is = entry_wanted_is(word, standing);
        if (not(replace_is)) {
          passed_over = add(passed_over, 1);
          return;
        }
        property_set(entry, explain_key, explain);
        list_add(changes, word);
      }
      each(entries, entry_read);
      gloss_passage_entries_changed_set(passage, entries, changes);
      let count = list_size(changes);
      return count;
    }
    let r2 = await gloss_chapter_passages_repair_generic(
      chapter_code,
      fn,
      passage_read,
    );
    let set = property_get(r2, "removed");
    entries_total = add(entries_total, set);
    function word_check(word) {
      let held = list_includes(found, word);
      if (not(held)) {
        list_add(missing, {
          chapter_code,
          word,
        });
      }
    }
    each(words, word_check);
  }
  await each_async(chapter_codes, chapter_repair);
  let chapters = list_size(chapter_codes);
  let r = {
    chapters,
    entries: entries_total,
    passed_over,
    missing,
  };
  return r;
}
