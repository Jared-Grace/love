import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { gloss_explain_roots_claimed } from "./gloss_explain_roots_claimed.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
import { property_get } from "./property_get.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { property_set } from "./property_set.mjs";
import { property_initialize_list } from "./property_initialize_list.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { each } from "./each.mjs";
import { each_async } from "./each_async.mjs";
import { object_property_names } from "./object_property_names.mjs";
export async function gloss_chapters_roots_claimed_gathered(fn) {
  "Every root a whole gloss store's explanations name in so many words, gathered under the root in small letters, carrying how often it is named, which words it was named for, which chapters those stand in, and one of the sentences that named it.";
  "The distinct reading beside this one answers which roots are claimed and nothing else, and every reading that wants to weigh a root has had to walk the store again to find out where it came from. Four of those were written in one night and their walks were identical, which is the whole argument for this: the walk is shared, the test is not, and a reading built on this is then only its test.";
  "One root named twice by two spellings of the same letters is one root here, because the store's capitals follow the sentence a root was written into rather than the root. The word a root was named for is kept in the same small letters for the same reason, and kept as a list because a root worth reading about is usually claimed for several.";
  "★ ONE SENTENCE IS KEPT AND NOT ALL OF THEM. It is whichever was met first, and which that is depends on the order the chapters came back, so it is there to be read as an example of how this root gets explained and never as the only place it is explained. A reading that needs every sentence has to walk the store itself.";
  "How many entries claimed anything is handed back beside how many roots were claimed, because a sentence may name two roots and the difference between those two numbers is the only place that shows.";
  "$plain fn";
  "the function names a gloss store and is looked up for its own name only; nothing here calls it.";
  arguments_assert(arguments, 1);
  let chapter_codes = await gloss_chapters_stored(fn);
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let explain_key = gloss_entry_explain_key();
  let entries_claiming = 0;
  let roots_total = 0;
  let by_root = {};
  function entries_pass(entries) {
    return entries;
  }
  async function chapter_read(chapter_code) {
    let entries = await gloss_chapter_entries_collect_generic(
      chapter_code,
      fn,
      entries_pass,
    );
    function entry_read(entry) {
      let explain = property_get_or_null(entry, explain_key);
      let none = null_is(explain);
      if (none) {
        return;
      }
      let claimed = gloss_explain_roots_claimed(explain);
      let claimed_count = list_size(claimed);
      let empty = equal(claimed_count, 0);
      if (empty) {
        return;
      }
      entries_claiming = add(entries_claiming, 1);
      let word = property_get(entry, word_key);
      function root_read(stated) {
        roots_total = add(roots_total, 1);
        let root = text_lower_to(stated);
        let row = property_get_or_null(by_root, root);
        let fresh = null_is(row);
        if (fresh) {
          let made = {
            stated_root: root,
            sightings: 0,
            words: [],
            chapters: [],
            explain,
          };
          property_set(by_root, root, made);
          row = made;
        }
        let seen = property_get(row, "sightings");
        let value = add(seen, 1);
        property_set(row, "sightings", value);
        let words = property_initialize_list(row, "words");
        let item = text_lower_to(word);
        list_add_if_not_includes(words, item);
        let chapters = property_initialize_list(row, "chapters");
        list_add_if_not_includes(chapters, chapter_code);
      }
      each(claimed, root_read);
    }
    each(entries, entry_read);
  }
  await each_async(chapter_codes, chapter_read);
  let root_names = object_property_names(by_root);
  let r = {
    chapters: list_size(chapter_codes),
    entries_claiming,
    roots_total,
    roots_distinct: list_size(root_names),
    by_root,
  };
  return r;
}
