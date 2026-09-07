import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { ebible_folder_cebuano } from "./ebible_folder_cebuano.mjs";
import { bible_words_written } from "./bible_words_written.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_unique_set } from "./list_unique_set.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { gloss_explain_roots_claimed } from "./gloss_explain_roots_claimed.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { property_initialize_list } from "./property_initialize_list.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { each_async } from "./each_async.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { text_accent_marks_removed } from "./text_accent_marks_removed.mjs";
import { set_includes } from "./set_includes.mjs";
import { binisaya_words_known_get } from "./binisaya_words_known_get.mjs";
import { not } from "./not.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export async function app_ceb_bible_gloss_roots_claimed_marks_priced() {
  "What taking the accent marks off a stated root would actually buy: every root written with one, and whether the same root without it is a word the bible writes or a word the dictionary holds.";
  "The reading of the rare letters found roots written da, tamay and pangganod with a stress mark on a vowel, and the Cebuano bible writes that mark in no word at all, so nothing matching a root against the text can ever meet one. That is a reason to fold the marks away, and a reason is not a price. A fold is worth what it lets a reader find that they could not find before, and a root that is unmatchable with the mark and still unmatchable without it is not helped by folding at all.";
  "So both spellings are put to both vocabularies and the four answers are handed back together. A root that goes from found nowhere to found in the bible is what the fold buys; a root that was already found, or is found neither way, is what it does not.";
  "★ THIS PRICES A CHANGE AND DOES NOT MAKE ONE. The fold used everywhere else in the gloss code is not touched, and a reader is shown nothing different because of this. Whether to change that fold is a decision about text a person sees and belongs to whoever owns those words.";
  "Every word the bible writes is asked rather than only the words it writes outside its names, because the question here is whether this exact spelling stands in the text and a name is text. That is deliberately a different vocabulary from the one the foreign reading asks, which wants the narrower question.";
  "Nothing is written and nothing is asked of the site.";
  arguments_assert(arguments, 0);
  let fn = app_ceb_bible_gloss_generate;
  let chapter_codes = await gloss_chapters_stored(fn);
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let explain_key = gloss_entry_explain_key();
  let bible_folder = ebible_folder_cebuano();
  let written = await bible_words_written(bible_folder);
  let lowered = [];
  function written_lower(word) {
    let lower = text_lower_to(word);
    list_add(lowered, lower);
  }
  each(written, written_lower);
  let vocabulary = list_unique_set(lowered);
  let known = await binisaya_words_known();
  let strict_total = 0;
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
      strict_total = add(strict_total, 1);
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
  let listed = [];
  let marked_sightings = 0;
  let bought_roots = 0;
  let bought_sightings = 0;
  function root_price(name) {
    let stripped = text_accent_marks_removed(name);
    let same = equal(stripped, name);
    if (same) {
      return;
    }
    let row = property_get(by_root, name);
    let sightings = property_get(row, "sightings");
    marked_sightings = add(marked_sightings, sightings);
    let before_written = set_includes(vocabulary, name);
    let after_written = set_includes(vocabulary, stripped);
    let before_held = binisaya_words_known_get(known, name);
    let after_held = binisaya_words_known_get(known, stripped);
    let b = null_is(before_held);
    let before_known = not(b);
    let b2 = null_is(after_held);
    let after_known = not(b2);
    property_set(row, "stripped", stripped);
    property_set(row, "before_written", before_written);
    property_set(row, "after_written", after_written);
    property_set(row, "before_known", before_known);
    property_set(row, "after_known", after_known);
    let found_before = before_written;
    if (before_known) {
      found_before = true;
    }
    let found_after = after_written;
    if (after_known) {
      found_after = true;
    }
    let bought = not(found_before);
    if (not(found_after)) {
      bought = false;
    }
    property_set(row, "bought", bought);
    if (bought) {
      bought_roots = add(bought_roots, 1);
      bought_sightings = add(bought_sightings, sightings);
    }
    list_add(listed, row);
  }
  each(root_names, root_price);
  function sightings_of(row) {
    let seen = property_get(row, "sightings");
    return seen;
  }
  list_sort_number_mapper_reverse(listed, sightings_of);
  let r = {
    chapters: list_size(chapter_codes),
    strict_total,
    roots_total,
    roots_distinct: list_size(root_names),
    marked_roots: list_size(listed),
    marked_sightings,
    bought_roots,
    bought_sightings,
    listed,
  };
  return r;
}
