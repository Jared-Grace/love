import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_initialize_list } from "./property_initialize_list.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { each } from "./each.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { each_async } from "./each_async.mjs";
import { list_size } from "./list_size.mjs";
export async function gloss_chapters_word_sentences_generic(fn, word_read) {
  "A walk over one authored gloss store that gathers, chapter by chapter, every word it explains beside the different sentences that chapter gives for it, and hands each of those over one at a time.";
  "★ THE GATHERING IS INSIDE ONE CHAPTER AND NEVER ACROSS CHAPTERS, WHICH IS THE WHOLE REASON A READING BUILT ON THIS MEANS ANYTHING. A correction is filed under a chapter and reaches no further, so a word explained two ways in two different chapters is not the same event as a word explained two ways in one, and a walk that pooled the store would report the first as if it were the second. The chapter is handed over beside the word so a reader can say which one it was looking at.";
  "The sentences are kept as a set rather than a list, so a word explained the same way at ten sightings arrives with one sentence and not ten. What a reader is being asked is how many different things the store says, and a repetition is not a different thing.";
  "An entry carrying no explanation at all is passed over rather than counted as a way of explaining the word. Silence is not a way of saying something.";
  "Nothing is written and nothing is asked of the site. The store is walked afresh on every ask.";
  "Neither parameter names ordinary data. The first names the gloss the store belongs to, and the second is called once for every word of every chapter, with the chapter's code, the word, and the set of sentences given for it there.";
  arguments_assert(arguments, 2);
  let chapter_codes = await gloss_chapters_stored(fn);
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let explain_key = gloss_entry_explain_key();
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
    let said_words = object_property_names(said);
    function said_word_read(word) {
      let sentences = property_get(said, word);
      word_read(chapter_code, word, sentences);
    }
    each(said_words, said_word_read);
  }
  await each_async(chapter_codes, chapter_read);
  let walked = {
    chapters: list_size(chapter_codes),
  };
  return walked;
}
