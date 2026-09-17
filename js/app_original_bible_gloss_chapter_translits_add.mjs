import { property_get_or_null_equal } from "./property_get_or_null_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { bible_interlinear_chapter_word_forms } from "./bible_interlinear_chapter_word_forms.mjs";
import { each } from "./each.mjs";
import { gloss_entry_translit_key } from "./gloss_entry_translit_key.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { gloss_entry_word_read } from "./gloss_entry_word_read.mjs";
import { bible_word_form } from "./bible_word_form.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
import { gloss_passage_entries_changed_set } from "./gloss_passage_entries_changed_set.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
import { list_size } from "./list_size.mjs";
export async function app_original_bible_gloss_chapter_translits_add(
  chapter_code,
) {
  "$plain chapter_code";
  "the code is a chapter's name, like GEN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "Give every explanation in one original-language gloss chapter the pronunciation of the word it is about, copied from the interlinear, so a reader can see how a word is said as well as hear it.";
  "★ IT LOOKS THE PRONUNCIATION UP BY THE VERY KEY A SOUND CLIP IS NAMED AFTER, the word cut back to the form that gets said. So the writing on the page and the voice in the ear are answering to one key: a word whose clip plays is a word whose pronunciation is found, and neither can drift away from the other without the other going missing too.";
  "A word the interlinear has no pronunciation for is left without one rather than given a guess, because a made-up pronunciation is worse than none - the reader cannot tell it from a true one. Which words those are is a separate reading, so the gap is counted rather than hidden.";
  "A chapter where nothing changed is not written back out, because these files are read by other people while a sweep runs and a file whose bytes did not need to move should not move.";
  arguments_assert(arguments, 1);
  let path = local_function_path_json(
    chapter_code,
    app_original_bible_gloss_generate,
  );
  let chapter = await file_read_json(path);
  let passages = property_get(chapter, "passages");
  let forms = await bible_interlinear_chapter_word_forms(chapter_code);
  let translits = {};
  function form_read(record) {
    let text = property_get(record, "text");
    let said = property_get(record, "translit");
    translits[text] = said;
  }
  each(forms, form_read);
  let key = gloss_entry_translit_key();
  let changes = [];
  function passage_read(passage) {
    let entries = gloss_passage_entries(passage);
    let changed = [];
    function entry_set(entry) {
      let word = gloss_entry_word_read(entry);
      let form = bible_word_form(word);
      let said = property_get_or_null(translits, form);
      let absent = null_is(said);
      if (absent) {
        return;
      }
      let same = property_get_or_null_equal(entry, key, said);
      if (same) {
        return;
      }
      property_set(entry, key, said);
      list_add(changed, word);
    }
    each(entries, entry_set);
    gloss_passage_entries_changed_set(passage, entries, changed);
    list_add_multiple(changes, changed);
  }
  each(passages, passage_read);
  let none = list_empty_is(changes);
  if (none) {
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
