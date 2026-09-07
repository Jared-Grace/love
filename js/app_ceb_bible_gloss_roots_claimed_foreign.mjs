import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { ebible_folder_cebuano } from "./ebible_folder_cebuano.mjs";
import { bible_words_names_apart } from "./bible_words_names_apart.mjs";
import { property_get } from "./property_get.mjs";
import { list_unique_set } from "./list_unique_set.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { gloss_explain_roots_claimed } from "./gloss_explain_roots_claimed.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { set_includes } from "./set_includes.mjs";
import { binisaya_words_known_get } from "./binisaya_words_known_get.mjs";
import { not } from "./not.mjs";
import { property_set } from "./property_set.mjs";
import { property_initialize_list } from "./property_initialize_list.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { each } from "./each.mjs";
import { each_async } from "./each_async.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export async function app_ceb_bible_gloss_roots_claimed_foreign() {
  "Every root an explanation states outright that is neither a word the Cebuano bible writes nor a word the dictionary on this disk has heard of, gathered by the root so one habit of writing shows as one row.";
  "The same two vocabularies the reading of the widened roots asks, put to the roots it refuses to look at. That reading walks away from every entry whose sentence names a root outright, and writes the reason down: where the sentence says the word root, the person has said what they mean, so a wrong answer there is theirs rather than the reading's. Three sentences in the store disprove that. Moawit is explained as built on awit, the root to sing - correct, in that order - and the reader that takes the piece after the words is the root comes back with to sing. So a stated root can be wrong without anybody having written anything wrong, and the pool nobody looks at is the pool where that happens.";
  "★ THIS IS A CLASS TO READ AND NOT A FAULT LIST. The reading of the widened roots measured its own noise and says two in three of what it names is sound: a root that is bound, rare and never looked up is missing from both vocabularies while being perfectly correct, and tapay under tinapay is the shape of that. Nothing is filtered here for the same reason, and the sightings are carried beside each root so that a row can be weighed rather than counted.";
  "Every root a sentence names is asked about and not only the first, which is where this parts company with the reading it mirrors. A sentence naming two roots names the second one for a reason, and a reading that stops at the first cannot see it. The count of roots is handed back beside the count of entries so the difference is visible rather than assumed.";
  "Two vocabularies are asked and a root has to be missing from both. The bible's own words are asked first, because a root that is a word of the language will normally stand somewhere in sixty-six books; the dictionary is asked second, because a bound root need never stand alone and the first test on its own would accuse it wrongly. An English word is in neither.";
  "Nothing is written and nothing is asked of the site.";
  arguments_assert(arguments, 0);
  let fn = app_ceb_bible_gloss_generate;
  let chapter_codes = await gloss_chapters_stored(fn);
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let explain_key = gloss_entry_explain_key();
  let bible_folder = ebible_folder_cebuano();
  let apart = await bible_words_names_apart(bible_folder);
  let common = property_get(apart, "common");
  let vocabulary = list_unique_set(common);
  let known = await binisaya_words_known();
  let strict_total = 0;
  let roots_total = 0;
  let foreign_sightings = 0;
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
      strict_total = add(strict_total, 1);
      let word = property_get(entry, word_key);
      function root_read(stated) {
        roots_total = add(roots_total, 1);
        let root = text_lower_to(stated);
        let written = set_includes(vocabulary, root);
        if (written) {
          return;
        }
        let held = binisaya_words_known_get(known, root);
        let missing = null_is(held);
        let looked_up = not(missing);
        if (looked_up) {
          return;
        }
        foreign_sightings = add(foreign_sightings, 1);
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
  let listed = [];
  function root_read_out(name) {
    let row = property_get(by_root, name);
    list_add(listed, row);
  }
  each(root_names, root_read_out);
  function sightings_of(row) {
    let seen = property_get(row, "sightings");
    return seen;
  }
  list_sort_number_mapper_reverse(listed, sightings_of);
  let r = {
    chapters: list_size(chapter_codes),
    strict_total,
    roots_total,
    foreign_roots: list_size(listed),
    foreign_sightings,
    listed,
  };
  return r;
}
