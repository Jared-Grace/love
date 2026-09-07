import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { local_function_folder } from "./local_function_folder.mjs";
import { folder_read_files_exists_ensure } from "./folder_read_files_exists_ensure.mjs";
import { list_map } from "./list_map.mjs";
import { file_name_json_name } from "./file_name_json_name.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { list_size } from "./list_size.mjs";
import { each } from "./each.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { gloss_passage_words_text_first } from "./gloss_passage_words_text_first.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { text_punctuation_split } from "./text_punctuation_split.mjs";
import { text_punctuation_dash_kept_split } from "./text_punctuation_dash_kept_split.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { each_async } from "./each_async.mjs";
export async function app_ceb_bible_gloss_passages_respell_reader_price() {
  "What changing the Cebuano gloss store's word reader would cost the respell, counted as the passages it would then walk past, under each of the four ways the two sides of its count can be read.";
  "★ THE RESPELL COMPARES TWO COUNTS AND DOES NOTHING AT ALL WHEN THEY DISAGREE, SO A READER CHANGED ON ONE SIDE ONLY IS SILENT DAMAGE RATHER THAN A WRONG ANSWER. The words the explanations name are cut one way and the words of the passage another, and both are cut at the dash today. Keeping the dash on one side turns every dashed word into one word there and leaves it as two on the other, so the counts part company and the passage is declined. Nothing is written, nothing is logged, and the answer the respell gives is the same empty list a passage that needed no correction gives.";
  "The four readings are the whole space, so the two halves can be seen to be as bad as each other rather than assumed to be. Both sides changed together is the reading that matters, and it is worth the run on its own: it says whether keeping the dash costs the respell anything at all.";
  "Nothing is written by this. The chapters are read and the counts compared as the respell compares them.";
  arguments_assert(arguments, 0);
  let fn = app_ceb_bible_gloss_generate;
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let folder = local_function_folder(fn);
  let file_names = await folder_read_files_exists_ensure(folder);
  let chapter_codes = list_map(file_names, file_name_json_name);
  let passages_seen = 0;
  let today = 0;
  let both_kept = 0;
  let passage_kept_only = 0;
  let entries_kept_only = 0;
  function entries_words_count(entries, read) {
    let named = 0;
    function entry_read(entry) {
      let word = property_get(entry, word_key);
      let words = read(word);
      let right = list_size(words);
      named = add(named, right);
    }
    each(entries, entry_read);
    return named;
  }
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
      let words_written = gloss_passage_words_text_first(passage);
      let line = list_join_space(words_written);
      let list = text_punctuation_split(line);
      let written_cut = list_size(list);
      let list2 = text_punctuation_dash_kept_split(line);
      let written_kept = list_size(list2);
      let named_cut = entries_words_count(entries, text_punctuation_split);
      let named_kept = entries_words_count(
        entries,
        text_punctuation_dash_kept_split,
      );
      let same_today = equal(named_cut, written_cut);
      if (not(same_today)) {
        today = add(today, 1);
      }
      let same_both = equal(named_kept, written_kept);
      if (not(same_both)) {
        both_kept = add(both_kept, 1);
      }
      let same_passage_only = equal(named_cut, written_kept);
      if (not(same_passage_only)) {
        passage_kept_only = add(passage_kept_only, 1);
      }
      let same_entries_only = equal(named_kept, written_cut);
      if (not(same_entries_only)) {
        entries_kept_only = add(entries_kept_only, 1);
      }
    }
    each(passages, passage_read);
  }
  await each_async(chapter_codes, chapter_read);
  let r = {
    passages: passages_seen,
    refused_today: today,
    refused_both_kept: both_kept,
    refused_passage_kept_only: passage_kept_only,
    refused_entries_kept_only: entries_kept_only,
  };
  return r;
}
