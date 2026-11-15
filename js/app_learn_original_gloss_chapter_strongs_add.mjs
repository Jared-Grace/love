import { arguments_assert } from "./arguments_assert.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { app_learn_original_gloss_generate } from "./app_learn_original_gloss_generate.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { bible_interlinear_chapter_word_forms } from "./bible_interlinear_chapter_word_forms.mjs";
import { bible_chapter_testament_name } from "./bible_chapter_testament_name.mjs";
import { ebible_testament_new_name } from "./ebible_testament_new_name.mjs";
import { equal } from "./equal.mjs";
import { each } from "./each.mjs";
import { gloss_entry_strong_key } from "./gloss_entry_strong_key.mjs";
import { gloss_entry_root_key } from "./gloss_entry_root_key.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { gloss_entry_word_read } from "./gloss_entry_word_read.mjs";
import { bible_word_form } from "./bible_word_form.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_get_or_null_equal } from "./property_get_or_null_equal.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
import { gloss_passage_entries_changed_set } from "./gloss_passage_entries_changed_set.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
import { list_size } from "./list_size.mjs";
export async function app_learn_original_gloss_chapter_strongs_add(
  chapter_code,
  dictionary,
) {
  arguments_assert(arguments, 2);
  ("$plain chapter_code");
  ("the code is a chapter's name, like GEN01, chosen from the Bible's own book and chapter numbering; the dictionary is Strong's, Hebrew and Greek together, keyed the way Strong wrote a number, like H430 or G2889. Both are data and neither runs.");
  ("Give every explanation in one original-language gloss chapter the Strong's number of the word it is about, copied from the interlinear, and the root word that number names in Strong's dictionary, so a reader can see which dictionary word a form belongs to and open it.");
  ("★ IT LOOKS THE NUMBER UP BY THE SAME KEY THE PRONUNCIATION IS FOUND BY, the word cut back to its spoken form, so a word whose pronunciation shows is a word whose number is found.");
  ("A word the interlinear gives no number for is left without one rather than given a guess, and so is a number the dictionary has no headword for: a root word that cannot be shown is not shown, and the number goes with it so the button never names half of what it opens.");
  ("A chapter where nothing changed is not written back out.");
  let path = local_function_path_json(
    chapter_code,
    app_learn_original_gloss_generate,
  );
  let chapter = await file_read_json(path);
  let passages = property_get(chapter, "passages");
  let forms = await bible_interlinear_chapter_word_forms(chapter_code);
  let letter = "H";
  let testament_name = bible_chapter_testament_name(chapter_code);
  let new_name = ebible_testament_new_name();
  if (equal(testament_name, new_name)) {
    letter = "G";
  }
  let strongs = {};
  function form_read(record) {
    let text = property_get(record, "text");
    let value = property_get(record, "strong");
    let strong = String(value);
    if (equal(strong, "")) {
      return;
    }
    strongs[text] = letter + strong;
  }
  each(forms, form_read);
  let strong_key = gloss_entry_strong_key();
  let root_key = gloss_entry_root_key();
  let changes = [];
  function passage_read(passage) {
    let entries = gloss_passage_entries(passage);
    let changed = [];
    function entry_set(entry) {
      let word = gloss_entry_word_read(entry);
      let form = bible_word_form(word);
      let lettered = property_get_or_null(strongs, form);
      if (null_is(lettered)) {
        return;
      }
      let headword = property_get_or_null(dictionary, lettered);
      if (null_is(headword)) {
        return;
      }
      let root = property_get(headword, "lemma");
      let same_strong = property_get_or_null_equal(entry, strong_key, lettered);
      let same_root = property_get_or_null_equal(entry, root_key, root);
      if (same_strong && same_root) {
        return;
      }
      property_set(entry, strong_key, lettered);
      property_set(entry, root_key, root);
      list_add(changed, word);
    }
    each(entries, entry_set);
    gloss_passage_entries_changed_set(passage, entries, changed);
    list_add_multiple(changes, changed);
  }
  each(passages, passage_read);
  if (list_empty_is(changes)) {
    let unchanged = {
      chapter_code,
      path,
      added: 0,
    };
    return unchanged;
  }
  let contents = json_format_to(chapter);
  await file_overwrite_uncached(path, contents);
  let r = {
    chapter_code,
    path,
    added: list_size(changes),
  };
  return r;
}
