import { gloss_row_sightings } from "./gloss_row_sightings.mjs";
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
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { add } from "./add.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { gloss_explain_roots_self_named } from "./gloss_explain_roots_self_named.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { list_get } from "./list_get.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_includes } from "./text_includes.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { set_includes } from "./set_includes.mjs";
import { not } from "./not.mjs";
import { binisaya_words_known_get } from "./binisaya_words_known_get.mjs";
import { each } from "./each.mjs";
import { each_async } from "./each_async.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export async function app_ceb_bible_gloss_root_self_named_apart_vocabulary_counted() {
  "The sightings of the ambiguous wording whose named root is not spelled inside its word, split again by whether the language has ever heard of that root, which is the test for whether a filter would cost anything.";
  "★ THE SPELLING MARK ALONE IS A TRADE AND THIS ASKS WHETHER THE TRADE CAN BE AVOIDED. Reading all 43 roots it flags: 19 of them are English pronouns and account for 764 sightings, and the other 24 are real Cebuano roots whose spelling shifted - dala under dad-on, dumdom under nahinumdom - and account for 35. Filtering on spelling alone would therefore buy 764 corrections at a cost of 35 losses, which is a judgment somebody has to make rather than a fault to fix.";
  "Adding the vocabularies is what could make it cost nothing, because the two sides differ in a second way. A shifted root is an ordinary word of the language and stands somewhere in the bible or in the dictionary; an English pronoun stands in neither. So the question worth an answer is how many of the 35 the vocabularies rescue and how many of the 764 they let through.";
  "Whether the answer licenses a filter is not settled here, and it could not be. A reader given only the sentence cannot ask a vocabulary at all - the bible and the dictionary are read off the disk - so acting on this needs a different reader that is handed the word, and building one is a choice about shape rather than a correction.";
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
  let outside = 0;
  let outside_unknown = 0;
  let outside_known = 0;
  let by_root_unknown = {};
  let by_root_known = {};
  function entries_pass(entries) {
    return entries;
  }
  function root_note(holder, root, word) {
    let row = property_get_or_null(holder, root);
    let fresh = null_is(row);
    if (fresh) {
      let made = {
        named_root: root,
        sightings: 0,
        words: [],
      };
      property_set(holder, root, made);
      row = made;
    }
    let seen = property_get(row, "sightings");
    let value = add(seen, 1);
    property_set(row, "sightings", value);
    let words = property_get(row, "words");
    list_add_if_not_includes(words, word);
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
      let named = gloss_explain_roots_self_named(explain);
      let count = list_size(named);
      let empty = equal(count, 0);
      if (empty) {
        return;
      }
      let first = list_get(named, 0);
      let root = text_lower_to(first);
      let s = property_get(entry, word_key);
      let word = text_lower_to(s);
      let input = gloss_word_folded(word);
      let part = gloss_word_folded(root);
      let held = text_includes(input, part);
      if (held) {
        return;
      }
      outside = add(outside, 1);
      let written = set_includes(vocabulary, root);
      let value2 = binisaya_words_known_get(known, root);
      let b = null_is(value2);
      let looked_up = not(b);
      let met = written || looked_up;
      if (met) {
        outside_known = add(outside_known, 1);
        root_note(by_root_known, root, word);
        return;
      }
      outside_unknown = add(outside_unknown, 1);
      root_note(by_root_unknown, root, word);
    }
    each(entries, entry_read);
  }
  await each_async(chapter_codes, chapter_read);
  function listed_of(holder) {
    let names = object_property_names(holder);
    let listed = [];
    function name_read(name) {
      let row = property_get(holder, name);
      list_add(listed, row);
    }
    each(names, name_read);
    list_sort_number_mapper_reverse(listed, gloss_row_sightings);
    return listed;
  }
  let unknown_listed = listed_of(by_root_unknown);
  let known_listed = listed_of(by_root_known);
  let r = {
    outside: outside,
    outside_unknown: outside_unknown,
    outside_known: outside_known,
    unknown_rows: unknown_listed,
    known_rows: known_listed,
  };
  return r;
}
