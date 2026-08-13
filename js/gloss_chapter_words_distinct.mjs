import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { gloss_entries_words_bare } from "./gloss_entries_words_bare.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_unique } from "./list_unique.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { not } from "./not.mjs";
import { each } from "./each.mjs";
import { property_get } from "./property_get.mjs";
export async function gloss_chapter_words_distinct(chapter_code, fn) {
  "Every different word one authored gloss chapter explains, each counted once however often it is explained.";
  "$plain chapter_code";
  "the code is a chapter's name, like PSA136, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "A chapter nobody has authored yet answers with no words rather than refusing, so a sweep over a whole store crosses the gaps without being told where they are.";
  let path = local_function_path_json(chapter_code, fn);
  let exists = await file_exists(path);
  if (not(exists)) {
    let none = [];
    return none;
  }
  let chapter = await file_read_json(path);
  let passages = property_get(chapter, "passages");
  let words = [];
  function passage_read(passage) {
    let entries = gloss_passage_entries(passage);
    let bare = gloss_entries_words_bare(entries);
    list_add_multiple(words, bare);
  }
  each(passages, passage_read);
  let distinct = list_unique(words);
  return distinct;
}
