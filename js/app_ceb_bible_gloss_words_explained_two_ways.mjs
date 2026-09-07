import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
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
import { list_size } from "./list_size.mjs";
import { add } from "./add.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { each_async } from "./each_async.mjs";
export async function app_ceb_bible_gloss_words_explained_two_ways() {
  "The words the Cebuano gloss store explains one way in one place of a chapter and a different way in another place of the same chapter, named beside how many different sentences each of them carries.";
  "★ THIS IS THE EXACT SET A HANDED-IN CORRECTION DESTROYS, AND THE REPAIR SAYS SO ITSELF WITHOUT KNOWING HOW MANY THERE ARE. A correction is written against one word of one chapter and is then set on every entry of that chapter carrying that word, because a word met twice is the same word. Where the two sightings needed different sentences the correction flattens both into one, and its own prose grants that there is nothing there that could tell. What nobody had is the size of what that rule is walking over.";
  "A word explained the same way at every sighting is not counted, because for that word the rule is exactly right and setting them all is what was wanted.";
  "The comparison is inside one chapter and never across chapters, because a correction is filed under a chapter and reaches no further. The same word explained two ways in two different chapters is not at risk from this and is not counted here.";
  "An entry carrying no explanation at all is passed over rather than counted as a way of explaining the word.";
  arguments_assert(arguments, 0);
  let fn = app_ceb_bible_gloss_generate;
  let chapter_codes = await gloss_chapters_stored(fn);
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let explain_key = gloss_entry_explain_key();
  let sightings = 0;
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
    let said_words = object_property_names(said);
    function word_read(word) {
      let sentences = property_get(said, word);
      let ways = list_size(sentences);
      sightings = add(sightings, 1);
      let one = equal(ways, 1);
      if (one) {
        return;
      }
      list_add(rows, {
        chapter: chapter_code,
        word: word,
        ways: ways,
      });
    }
    each(said_words, word_read);
  }
  await each_async(chapter_codes, chapter_read);
  let r = {
    chapters: list_size(chapter_codes),
    word_in_chapter: sightings,
    two_ways: list_size(rows),
    rows: rows,
  };
  return r;
}
