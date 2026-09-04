import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { local_function_folder } from "./local_function_folder.mjs";
import { folder_read_files_exists_ensure } from "./folder_read_files_exists_ensure.mjs";
import { list_map } from "./list_map.mjs";
import { file_name_json_name } from "./file_name_json_name.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_passage_urdu_texts_mapped } from "./gloss_passage_urdu_texts_mapped.mjs";
import { urdu_names_respelled } from "./urdu_names_respelled.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
import { list_map_async_filter_null_not_is } from "./list_map_async_filter_null_not_is.mjs";
export async function app_en_learn_bible_gloss_urdu_names_repair() {
  "Every stored chapter of English words explained in Urdu, with each Bible name in our own writing spelled the way whoever reads Urdu has ruled it should be spelled, and a report of which chapters that changed.";
  "This is what makes a name single sourced. A name stands in hundreds of places across the chapters, so a ruling that had to be carried by hand would be a sweep through every file every time somebody changed their mind. Written into the table instead, a ruling is one line, and this carries it everywhere.";
  "The rulings live apart from this on purpose, in the table, because they are given data: what makes one spelling of a name right is knowing how the people who will read it say the name, and no amount of reading the text answers that.";
  "Nothing is touched but the short Urdu standing for each English word and the longer Urdu explaining it. The verse is left alone in every chapter, because the verse is another publisher's translation and their spelling of a name is their choice rather than a fault.";
  "A chapter that changed is written back and then run through again, and the second run has to find nothing. It would find something if one ruling respelled a name into a spelling that another ruling respells again, which is a table that contradicts itself, and that is worth being told about rather than being applied twice.";
  "A chapter is repaired where it is stored and is not published by this. Sending the repaired chapters out to the reader is its own step.";
  let fn = app_en_learn_bible_gloss_urdu_generate;
  let folder = local_function_folder(fn);
  let file_names = await folder_read_files_exists_ensure(folder);
  let chapter_codes = list_map(file_names, file_name_json_name);
  function chapter_map(chapter) {
    let passages = property_get(chapter, "passages");
    let touched = [];
    function passage_map(passage) {
      let count = gloss_passage_urdu_texts_mapped(
        passage,
        urdu_names_respelled,
      );
      let none = equal(count, 0);
      if (none) {
        return;
      }
      list_add(touched, count);
    }
    list_map(passages, passage_map);
    let passages_changed = list_size(touched);
    return passages_changed;
  }
  async function chapter_repair(chapter_code) {
    let path = local_function_path_json(chapter_code, fn);
    let chapter = await file_read_json(path);
    let passages_changed = chapter_map(chapter);
    let clean = equal(passages_changed, 0);
    if (clean) {
      let untouched = null;
      return untouched;
    }
    let after = json_format_to(chapter);
    await file_overwrite_uncached(path, after);
    let again = chapter_map(chapter);
    let settled = equal(again, 0);
    let r = {
      chapter_code,
      passages_changed,
      settled,
    };
    return r;
  }
  let repaired = await list_map_async_filter_null_not_is(
    chapter_codes,
    chapter_repair,
  );
  let chapters = list_size(chapter_codes);
  let r = {
    chapters,
    repaired,
  };
  return r;
}
