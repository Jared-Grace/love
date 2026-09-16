import { arguments_assert } from "./arguments_assert.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { gloss_entry_word_read } from "./gloss_entry_word_read.mjs";
import { bible_word_section_mark_display_strip } from "./bible_word_section_mark_display_strip.mjs";
import { equal } from "./equal.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { gloss_passage_entries_changed_set } from "./gloss_passage_entries_changed_set.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
export async function app_original_bible_gloss_chapter_section_marks_strip(
  chapter_code,
) {
  "$plain chapter_code";
  "the code is a chapter's name, like GEN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "Take the Hebrew paragraph mark off the end of every word in one original-language gloss chapter that has one welded on, so the reader is shown the word the Bible spells rather than the word plus the mark that closes the section after it.";
  "★ THE MARK IS NOT A LETTER OF THE WORD, and the interlinear's own pronunciation of the same word proves it: the mark is never said. The source hands it over stuck to the last word of a section, and left alone it reaches the reader as a misspelling sitting where a correctly spelt word should be.";
  "★ IT ASKS THE SPOKEN CUT WHICH WORDS ARE WELDED rather than judging by the last letter, because the closed mark is spelt with a letter that ends real Hebrew words - a cup ends in it - so a rule reading the last letter alone would quietly damage them.";
  "The chanting marks are kept, because this mends a word a person reads and those are part of what they read; only the welded letter comes off.";
  "A chapter where nothing changed is not written back out, because these files are read by other people while a sweep runs and a file whose bytes did not need to move should not move.";
  arguments_assert(arguments, 1);
  let path = local_function_path_json(
    chapter_code,
    app_original_bible_gloss_generate,
  );
  let chapter = await file_read_json(path);
  let passages = property_get(chapter, "passages");
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let changes = [];
  function passage_read(passage) {
    let entries = gloss_passage_entries(passage);
    let changed = [];
    function entry_strip(entry) {
      let word = gloss_entry_word_read(entry);
      let cut = bible_word_section_mark_display_strip(word);
      let same = equal(word, cut);
      if (same) {
        return;
      }
      property_set(entry, word_key, cut);
      let change = {
        before: word,
        after: cut,
      };
      list_add(changed, change);
    }
    each(entries, entry_strip);
    gloss_passage_entries_changed_set(passage, entries, changed);
    list_add_multiple(changes, changed);
  }
  each(passages, passage_read);
  let none = list_empty_is(changes);
  if (none) {
    let unchanged = {
      chapter_code,
      path,
      changes,
    };
    return unchanged;
  }
  let contents = json_format_to(chapter);
  await file_overwrite_uncached(path, contents);
  let r = {
    chapter_code,
    path,
    changes,
  };
  return r;
}
