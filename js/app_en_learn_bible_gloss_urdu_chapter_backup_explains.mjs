import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_add } from "./list_add.mjs";
export async function app_en_learn_bible_gloss_urdu_chapter_backup_explains(
  chapter_code,
  backup_folder,
) {
  "The explanations one chapter of the Urdu gloss store carried in a backup copy, in the order the chapter reads.";
  "$plain chapter_code";
  "the code is a chapter's name, like ACT12, chosen from the Bible's own book and chapter numbering. It names a file to read and nothing that runs.";
  "$plain backup_folder";
  "the folder is a copy of the store taken before a sweep wrote over it. It is read and never written.";
  "Git has never seen the store, so a copy taken before a sweep is the only record of what the author wrote. This hands that record back in the one shape an undo can use: the same order the live chapter is walked in, so the two line up entry for entry without either side having to carry a number.";
  "An entry with no explanation still takes its place in the answer, because the answer is read by position and a gap that closed up would move every entry after it onto the wrong sentence.";
  arguments_assert(arguments, 2);
  let file_name = text_combine(chapter_code, ".json");
  let file_path = path_join([backup_folder, file_name]);
  let chapter = await file_read_json(file_path);
  let passages = property_get(chapter, "passages");
  let key = gloss_entry_explain_key();
  let explains = [];
  for (let passage of passages) {
    let entries = gloss_passage_entries(passage);
    for (let entry of entries) {
      let explain = property_get_or_null(entry, key);
      list_add(explains, explain);
    }
  }
  return explains;
}
