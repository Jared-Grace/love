import { add } from "./add.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { each } from "./each.mjs";
import { each_async } from "./each_async.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { gloss_chapter_passages_repair_generic } from "./gloss_chapter_passages_repair_generic.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { gloss_passage_entries_changed_set } from "./gloss_passage_entries_changed_set.mjs";
import { gloss_repairs_file_path } from "./gloss_repairs_file_path.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { property_set } from "./property_set.mjs";
export async function gloss_explains_repair_generic(fn) {
  "One named gloss store with the corrected explanations handed to it put in place, answered for by how many were set and which of the words asked for were never found.";
  "It repairs single words and leaves every other explanation of the passage exactly as it stands. That is what the reading it serves produces: an explanation naming the wrong root is one sentence wrong inside a passage that is otherwise sound, and replacing the passage to correct it would throw away a dozen right explanations to fix one.";
  "The words never found come back by name rather than being passed over, because a mistyped word would otherwise change nothing and report the same success as a repaired one - and the explanation it was written for would keep the fault it was meant to lose. It is the same refusal the chapter handover makes for a mistyped set of verses, for the same reason.";
  "Every entry carrying the word is set, because a word met twice in one chapter is the same word and the correction written for it is the correction it needs. Where two sightings need different sentences the reading has to say so, and there is nothing here that could tell.";
  let path = gloss_repairs_file_path(fn);
  let repairs = await file_read_json(path);
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let explain_key = gloss_entry_explain_key();
  let chapter_codes = object_property_names(repairs);
  let entries_total = 0;
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
        property_set(entry, explain_key, explain);
        list_add(changes, word);
        list_add(found, word);
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
    missing,
  };
  return r;
}
