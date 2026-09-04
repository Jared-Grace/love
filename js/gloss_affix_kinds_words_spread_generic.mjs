import { gloss_affix_kinds_words_file_path } from "./gloss_affix_kinds_words_file_path.mjs";
import { file_read_json_exists_ensure } from "./file_read_json_exists_ensure.mjs";
import { gloss_affix_kinds_wrong_words_generic } from "./gloss_affix_kinds_wrong_words_generic.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { gloss_repairs_file_path } from "./gloss_repairs_file_path.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function gloss_affix_kinds_words_spread_generic(fn, known) {
  "One corrected explanation per word turned into an entry in the repairs file for every chapter that word is wrong in, answered for by what was written, what was left standing and which words the store no longer flags.";
  "The store is asked where each word is wrong rather than the writer naming the chapters. A written list would be a copy of something the store already knows and would rot the moment a chapter was repaired, and the whole reason for writing by word was to stop copying chapter names about.";
  "A word the repairs file already holds for a chapter is never overwritten, and comes back named. That entry was written for that chapter and may say something about the verse that a sentence written for the word in general does not.";
  "Nothing reaches the store here. This fills in the file the repair step reads, and that step stays the one place the store is changed - so a spread that turns out wrong is undone by writing the words again and spreading again, not by mending chapters.";
  let path_words = gloss_affix_kinds_words_file_path(fn);
  let authored = await file_read_json_exists_ensure(path_words);
  let gathered_all = await gloss_affix_kinds_wrong_words_generic(fn, known);
  let by_word = {};
  function gathered_index(gathered) {
    let word = property_get(gathered, "word");
    property_set(by_word, word, gathered);
  }
  each(gathered_all, gathered_index);
  let path_repairs = gloss_repairs_file_path(fn);
  let repairs = await file_read_json_exists_ensure(path_repairs);
  let written = [];
  let refused = [];
  let unmatched = [];
  let words = object_property_names(authored);
  function word_spread(word) {
    let gathered = property_get_or_null(by_word, word);
    if (null_is(gathered)) {
      list_add(unmatched, word);
      return;
    }
    let explain = property_get(authored, word);
    let chapters = property_get(gathered, "chapters");
    function chapter_write(chapter_code) {
      let held = property_get_or_null(repairs, chapter_code);
      let chapter_repairs = held;
      if (null_is(held)) {
        chapter_repairs = {};
        property_set(repairs, chapter_code, chapter_repairs);
      }
      let standing = property_get_or_null(chapter_repairs, word);
      if (null_is(standing)) {
        property_set(chapter_repairs, word, explain);
        list_add(written, {
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
    each(chapters, chapter_write);
  }
  each(words, word_spread);
  await file_overwrite_json(path_repairs, repairs);
  let r = {
    path_words,
    path_repairs,
    written,
    refused,
    unmatched,
  };
  return r;
}
