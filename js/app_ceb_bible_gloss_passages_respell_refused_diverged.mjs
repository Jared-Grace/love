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
import { gloss_passage_words_bare } from "./gloss_passage_words_bare.mjs";
import { gloss_entries_words_bare } from "./gloss_entries_words_bare.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { list_first_difference_index } from "./list_first_difference_index.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { list_slice_count } from "./list_slice_count.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { each_async } from "./each_async.mjs";
export async function app_ceb_bible_gloss_passages_respell_refused_diverged() {
  "For each Cebuano passage the respell walks past, the first place the words its explanations name stop agreeing with the words in the passage, with a little of each side around it.";
  "★ A COUNT SAYS THAT TWO LISTS DISAGREE AND NEVER WHERE, AND WHERE IS THE WHOLE OF WHAT A PERSON NEEDS TO MEND ONE. Every refusal measured so far names one more word than the passage has, which is one shape and not thirteen accidents; the first place the two sequences part is the word that shape is about. Reading it off the count alone is impossible, and reading it off the file by hand is thirteen passages of counting words.";
  "The window is the words either side of the parting, taken from both lists, because the extra word is only recognisable next to what should have been in its place.";
  "Nothing is written. This reads the same chapters the respell reads and compares the same two lists it compares.";
  arguments_assert(arguments, 0);
  let fn = app_ceb_bible_gloss_generate;
  let words_read = gloss_passage_words_text_first;
  let folder = local_function_folder(fn);
  let file_names = await folder_read_files_exists_ensure(folder);
  let chapter_codes = list_map(file_names, file_name_json_name);
  let diverged = [];
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
      let written = gloss_passage_words_bare(passage, words_read);
      let explained = gloss_entries_words_bare(entries);
      let named = list_size(explained);
      let count = list_size(written);
      let counted_same = equal(named, count);
      if (counted_same) {
        return;
      }
      let at = list_first_difference_index(explained, written);
      let from = subtract(at, 2);
      let low = less_than(from, 0);
      let start = low ? 0 : from;
      let row = {
        chapter_code: chapter_code,
        at: at,
        named: named,
        written: count,
        named_around: list_slice_count(explained, start, 5),
        written_around: list_slice_count(written, start, 5),
      };
      list_add(diverged, row);
    }
    each(passages, passage_read);
  }
  await each_async(chapter_codes, chapter_read);
  let r = {
    refused: list_size(diverged),
    rows: diverged,
  };
  return r;
}
