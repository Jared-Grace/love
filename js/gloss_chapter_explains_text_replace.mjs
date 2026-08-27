import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_replace } from "./text_replace.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { gloss_passage_entries_changed_set } from "./gloss_passage_entries_changed_set.mjs";
import { list_size } from "./list_size.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
export async function gloss_chapter_explains_text_replace(
  chapter_code,
  fn,
  before,
  after,
) {
  "One stored gloss chapter with a settled run of wording swapped for another wherever a word explanation says it, and the count of explanations that changed.";
  "It reads and writes the chapter once however many explanations it touches, and leaves the file untouched when none of them say the wording, because readers are pulling these chapters while a sweep runs and a file whose bytes did not need to move should not move.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN10, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "$plain before";
  "$plain after";
  "the two are runs of letters, the wording to look for and the wording to leave in its place. They are prose a reader sees and nothing that runs.";
  let path = local_function_path_json(chapter_code, fn);
  let chapter = await file_read_json(path);
  let passages = property_get(chapter, "passages");
  let key = gloss_entry_explain_key();
  let changed = [];
  function passage_read(passage) {
    let entries = gloss_passage_entries(passage);
    let changes = [];
    function entry_read(entry) {
      let explain = property_get(entry, key);
      let says = text_includes(explain, before);
      if (says) {
        let replaced = text_replace(explain, before, after);
        property_set(entry, key, replaced);
        changes.push(entry);
        changed.push(entry);
      }
    }
    each(entries, entry_read);
    gloss_passage_entries_changed_set(passage, entries, changes);
  }
  each(passages, passage_read);
  let count = list_size(changed);
  let none = list_empty_is(changed);
  if (none) {
    let untouched = {
      chapter_code,
      count,
    };
    return untouched;
  }
  let contents = json_format_to(chapter);
  await file_overwrite_uncached(path, contents);
  let r = {
    chapter_code,
    count,
  };
  return r;
}
