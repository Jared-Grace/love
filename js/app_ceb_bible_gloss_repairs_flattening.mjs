import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_repairs_file_path } from "./gloss_repairs_file_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_initialize_list } from "./property_initialize_list.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { each } from "./each.mjs";
import { add } from "./add.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { each_async } from "./each_async.mjs";
export async function app_ceb_bible_gloss_repairs_flattening() {
  "Of the corrections handed in for the Cebuano gloss store, how many land on a word its chapter explains more than one way - so that setting them all replaces sentences nobody asked about - each named beside how many sentences it would flatten.";
  "★ THE SET AT RISK AND THE SET ACTUALLY REACHED ARE DIFFERENT SIZES AND ONLY THE SECOND IS A FAULT COUNT. Seventeen in every hundred words of a chapter are explained two ways somewhere in it, which is the size of what the repair rule walks over; but the rule only ever fires on a word a correction was handed in for. Counting the first and calling it damage would price a gap by how big it is rather than by how often it goes wrong, which is the reverse of what a measurement is for.";
  "A correction naming a word the chapter does not explain at all is counted apart. It changes nothing, and the repair already reports those by name for the same reason - a mistyped word otherwise reports the same success as a repaired one.";
  "An entry carrying no explanation is passed over rather than counted as a way of explaining the word.";
  arguments_assert(arguments, 0);
  let fn = app_ceb_bible_gloss_generate;
  let path = gloss_repairs_file_path(fn);
  let repairs = await file_read_json(path);
  let chapter_codes = object_property_names(repairs);
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let explain_key = gloss_entry_explain_key();
  let handed = 0;
  let absent = 0;
  let one_way = 0;
  let rows = [];
  function entries_pass(entries) {
    return entries;
  }
  async function chapter_read(chapter_code) {
    let entries = await gloss_chapter_entries_collect_generic(
      chapter_code,
      fn,
      entries_pass,
    );
    let said = {};
    function entry_read(entry) {
      let explain = property_get_or_null(entry, explain_key);
      let none = null_is(explain);
      if (none) {
        return;
      }
      let word = property_get(entry, word_key);
      let sentences = property_initialize_list(said, word);
      list_add_if_not_includes(sentences, explain);
    }
    each(entries, entry_read);
    let wanted = property_get(repairs, chapter_code);
    let words = object_property_names(wanted);
    function word_read(word) {
      handed = add(handed, 1);
      let sentences = property_get_or_null(said, word);
      let none = null_is(sentences);
      if (none) {
        absent = add(absent, 1);
        return;
      }
      let ways = list_size(sentences);
      let one = equal(ways, 1);
      if (one) {
        one_way = add(one_way, 1);
        return;
      }
      list_add(rows, {
        chapter: chapter_code,
        word: word,
        ways: ways,
      });
    }
    each(words, word_read);
  }
  await each_async(chapter_codes, chapter_read);
  let r = {
    chapters: list_size(chapter_codes),
    handed: handed,
    absent: absent,
    one_way: one_way,
    flattening: list_size(rows),
    rows: rows,
  };
  return r;
}
