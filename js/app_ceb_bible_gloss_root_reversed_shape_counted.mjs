import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { gloss_explain_roots_named } from "./gloss_explain_roots_named.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { add } from "./add.mjs";
import { text_regex_first_groups } from "./text_regex_first_groups.mjs";
import { list_get } from "./list_get.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_root_named_cebuano_shaped_is } from "./gloss_root_named_cebuano_shaped_is.mjs";
import { gloss_root_named_word_spelled_in_is } from "./gloss_root_named_word_spelled_in_is.mjs";
import { property_set } from "./property_set.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { each } from "./each.mjs";
import { each_async } from "./each_async.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { list_take } from "./list_take.mjs";
export async function app_ceb_bible_gloss_root_reversed_shape_counted(
  sample_size,
) {
  "How many explanations the four wordings still call bare open by quoting a word that is spelled inside the word being explained but is not that word, which is the one shape that names its root first and so could never be read from the sentence alone.";
  "★ THIS IS THE WORDING THAT WAS LEFT UNREAD ON PURPOSE, AND IT IS ASKED NOW ONLY BECAUSE THE THING THAT WAS MISSING HAS ARRIVED. Buhat is to do. Gi- tells it from the side of the deed opens with the root rather than the headword, and a reader handed the sentence alone cannot tell which of the two it is looking at - guessing would manufacture a root. Handed the word as well the question stops being a guess: a first quoted token equal to the word is a headword, and one spelled inside the word without being it is a root, because nothing else could be both quoted first and contained.";
  "It counts and prints and reads nothing as settled. The estimate standing before this was 409 sightings, taken by the strict reader over a different question, and an estimate taken by a different reader about a different thing is worth measuring again rather than carrying forward.";
  "Entries the four wordings already read are passed over untouched, so this only ever looks at what is still called bare. That is the same move that found each of the four wordings in turn - print what the readers before you still call silence - and it is the only one of those rounds that could not be done until now.";
  "$plain sample_size";
  "the count says how many roots to print. It names nothing that runs.";
  arguments_assert(arguments, 1);
  let fn = app_ceb_bible_gloss_generate;
  let chapter_codes = await gloss_chapters_stored(fn);
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let explain_key = gloss_entry_explain_key();
  let opening_pattern = new RegExp(
    "^\\s*['‘\"]([^'’\"]+?)[,.;:!?]?['’\"]",
    "g",
  );
  let bare_total = 0;
  let opened_quoted = 0;
  let headword_opened = 0;
  let reversed = 0;
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
      let named = gloss_explain_roots_named(explain);
      let named_count = list_size(named);
      let named_empty = equal(named_count, 0);
      if (not(named_empty)) {
        return;
      }
      bare_total = add(bare_total, 1);
      let opening = text_regex_first_groups(explain, opening_pattern);
      let opening_count = list_size(opening);
      let opening_none = equal(opening_count, 0);
      if (opening_none) {
        return;
      }
      opened_quoted = add(opened_quoted, 1);
      let first = list_get(opening, 0);
      let token = text_lower_to(first);
      let s = property_get(entry, word_key);
      let word = text_lower_to(s);
      let same = equal(token, word);
      if (same) {
        headword_opened = add(headword_opened, 1);
        return;
      }
      let shaped = gloss_root_named_cebuano_shaped_is(token);
      if (not(shaped)) {
        return;
      }
      let spelled = gloss_root_named_word_spelled_in_is(word, token);
      if (not(spelled)) {
        return;
      }
      reversed = add(reversed, 1);
      let row = property_get_or_null(by_root, token);
      let fresh = null_is(row);
      if (fresh) {
        let made = {
          named_root: token,
          sightings: 0,
          words: [],
          explain: explain,
        };
        property_set(by_root, token, made);
        row = made;
      }
      let seen = property_get(row, "sightings");
      let value = add(seen, 1);
      property_set(row, "sightings", value);
      let words = property_get(row, "words");
      list_add_if_not_includes(words, word);
    }
    each(entries, entry_read);
  }
  await each_async(chapter_codes, chapter_read);
  let names = object_property_names(by_root);
  let listed = [];
  function name_read(name) {
    let row = property_get(by_root, name);
    list_add(listed, row);
  }
  each(names, name_read);
  function sightings_of(row) {
    let seen = property_get(row, "sightings");
    return seen;
  }
  list_sort_number_mapper_reverse(listed, sightings_of);
  let count = Number(sample_size);
  let r = {
    bare_total: bare_total,
    opened_quoted: opened_quoted,
    headword_opened: headword_opened,
    reversed: reversed,
    reversed_roots: list_size(listed),
    reversed_shown: list_take(listed, count),
  };
  return r;
}
