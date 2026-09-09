import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { gloss_entry_word_read } from "./gloss_entry_word_read.mjs";
import { gloss_explain_back_reference_is } from "./gloss_explain_back_reference_is.mjs";
import { app_en_learn_bible_gloss_urdu_explain_meaning_parts } from "./app_en_learn_bible_gloss_urdu_explain_meaning_parts.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { property_set } from "./property_set.mjs";
import { app_en_learn_bible_gloss_urdu_pointing_explain_fresh } from "./app_en_learn_bible_gloss_urdu_pointing_explain_fresh.mjs";
import { gloss_chapter_entries_explain_rewrite_generic } from "./gloss_chapter_entries_explain_rewrite_generic.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
export async function app_en_learn_bible_gloss_urdu_chapter_pointing_repair(
  chapter_code,
) {
  "Puts a real explanation in place of every one in a single Urdu chapter that only points at a word further up, taking the words from the explanation that same word was given earlier in that same chapter, and answers with the words it moved.";
  "$plain chapter_code";
  "the code is a chapter's name, like ACT12, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "The chapter is the right span to look in and no wider, because that is the span the pointing sentence itself claims: it says the word came above, and above means above in what the reader is reading. A word borrowed from another chapter would be a sentence the pointing never promised.";
  "Every entry is looked at, not only the pointing ones, because the explanation a pointing entry needs is the one that went past just before it. The reading is done in the order the chapter is written, so the borrowed sentence is always the nearest one above and never one from below.";
  "An entry whose own explanation has nothing to lend is not remembered, so a run of pointing entries all reach back past each other to the last place the word was really explained.";
  arguments_assert(arguments, 1);
  let explain_key = gloss_entry_explain_key();
  let latest = {};
  function entry_any_is(entry) {
    let looked = null_is(entry);
    let n = not(looked);
    return n;
  }
  function explain_new(entry) {
    let explain = property_get_or_null(entry, explain_key);
    if (null_is(explain)) {
      return null;
    }
    let word = gloss_entry_word_read(entry);
    let pointing = gloss_explain_back_reference_is(explain);
    if (not(pointing)) {
      let parts = app_en_learn_bible_gloss_urdu_explain_meaning_parts(explain);
      let b = list_empty_is(parts);
      let lendable = not(b);
      if (lendable) {
        property_set(latest, word, explain);
      }
      return null;
    }
    let source = property_get_or_null(latest, word);
    if (null_is(source)) {
      return null;
    }
    let fresh = app_en_learn_bible_gloss_urdu_pointing_explain_fresh(
      explain,
      source,
    );
    return fresh;
  }
  let changes = await gloss_chapter_entries_explain_rewrite_generic(
    chapter_code,
    app_en_learn_bible_gloss_urdu_generate,
    entry_any_is,
    explain_new,
  );
  return changes;
}
