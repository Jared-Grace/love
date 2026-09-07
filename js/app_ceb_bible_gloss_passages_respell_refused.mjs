import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_passage_words_text_first } from "./gloss_passage_words_text_first.mjs";
import { local_function_folder } from "./local_function_folder.mjs";
import { folder_read_files_exists_ensure } from "./folder_read_files_exists_ensure.mjs";
import { list_map } from "./list_map.mjs";
import { file_name_json_name } from "./file_name_json_name.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { add } from "./add.mjs";
import { gloss_passage_words_bare } from "./gloss_passage_words_bare.mjs";
import { gloss_entries_words_bare } from "./gloss_entries_words_bare.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { each_async } from "./each_async.mjs";
export async function app_ceb_bible_gloss_passages_respell_refused() {
  "The passages in the Cebuano gloss store that the respell walks past without correcting anything, because the words its explanations name do not come to the same number as the words in the passage.";
  "★ THE REFUSAL IS SILENT AND IS MEANT TO BE, WHICH IS WHY IT HAS TO BE COUNTED FROM OUTSIDE. The respell answers with the spellings it changed, so a passage it declines and a passage that needed nothing look identical from the outside - both contribute nothing to the list. Its own prose gives the reason and it is a good one: where a word was never explained at all, every explanation after it is about a different word, and writing the passage's spellings over them would paint the fault over rather than mend it. What nobody could see until now is how much of the store that leaves untouched.";
  "This changes nothing. The chapters are read and the counts compared exactly as the respell compares them, and no file is written.";
  "A high number here is not by itself a fault in the store. It says that many passages have a gap between what the passage says and what was explained, and the respell is right to leave those alone; it is the size of the set that a person has to decide about.";
  arguments_assert(arguments, 0);
  let fn = app_ceb_bible_gloss_generate;
  let words_read = gloss_passage_words_text_first;
  let folder = local_function_folder(fn);
  let file_names = await folder_read_files_exists_ensure(folder);
  let chapter_codes = list_map(file_names, file_name_json_name);
  let refused = [];
  let passages_seen = 0;
  async function chapter_read(chapter_code) {
    let path = local_function_path_json(chapter_code, fn);
    let chapter = await file_read_json(path);
    let passages = property_get(chapter, "passages");
    function passage_read(passage) {
      let entries = gloss_passage_entries(passage);
      let empty = list_empty_is(entries);
      if (empty) {
        return;
      }
      passages_seen = add(passages_seen, 1);
      let written = gloss_passage_words_bare(passage, words_read);
      let explained = gloss_entries_words_bare(entries);
      let named = list_size(explained);
      let count = list_size(written);
      let counted_same = equal(named, count);
      if (counted_same) {
        return;
      }
      let row = {
        chapter_code: chapter_code,
        named: named,
        written: count,
      };
      list_add(refused, row);
    }
    each(passages, passage_read);
  }
  await each_async(chapter_codes, chapter_read);
  let r = {
    chapters: list_size(chapter_codes),
    passages: passages_seen,
    refused: list_size(refused),
    rows: refused,
  };
  return r;
}
