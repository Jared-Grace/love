import { gloss_row_sightings } from "./gloss_row_sightings.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { ebible_folder_cebuano } from "./ebible_folder_cebuano.mjs";
import { bible_words_names_apart } from "./bible_words_names_apart.mjs";
import { property_get } from "./property_get.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_unique_set } from "./list_unique_set.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { add } from "./add.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { gloss_explain_roots_named } from "./gloss_explain_roots_named.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { gloss_explain_roots_named_word_given } from "./gloss_explain_roots_named_word_given.mjs";
import { not } from "./not.mjs";
import { list_get } from "./list_get.mjs";
import { each_async } from "./each_async.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { list_take } from "./list_take.mjs";
export async function app_ceb_bible_gloss_root_word_given_apart_counted(
  sample_size,
) {
  "What the reader that is given the word as well as the sentence would change about the Cebuano gloss store, counted three ways so the choice between spelling alone and spelling with a vocabulary behind it is a number rather than an argument.";
  "★ THE TWO WAYS OF DOING THIS CORRECT THE SAME ENTRIES AND DIFFER ONLY IN WHAT THEY TAKE DOWN WITH THEM, WHICH IS WHY BOTH ARE COUNTED HERE RATHER THAN ONE BEING ARGUED FOR. Spelling alone refuses every answer the ambiguous wording gives that is not spelled inside its word. The vocabulary keeps back the ones the Cebuano bible or the gathered dictionary has met, which are real roots whose spelling shifted further than folding reaches. Neither is a correction on its own - the first is a trade and the second is a smaller trade - so what this owes a reader is both prices and the names of what each one loses.";
  "The earlier reading of this was taken before the reader refused one letter answers, so its figures counted the English I seventy six times as a root the vocabulary would rescue. That is why it is measured again here rather than subtracted on paper. A number taken before a change is not a number about the code that runs.";
  "The dropped and the rescued are gathered by root and meant to be printed whole rather than sampled, because the whole of the argument is which side of the line the small counts fall on. Reading the top of the list was what made the first estimate of this wrong by an order of magnitude.";
  "Nothing is written and no explanation is changed. This says what a swap would do.";
  "$plain sample_size";
  "the count says how many roots to print from each list. It names nothing that runs.";
  arguments_assert(arguments, 1);
  let fn = app_ceb_bible_gloss_generate;
  let chapter_codes = await gloss_chapters_stored(fn);
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let explain_key = gloss_entry_explain_key();
  let bible_folder = ebible_folder_cebuano();
  let apart = await bible_words_names_apart(bible_folder);
  let common = property_get(apart, "common");
  let dictionary = await binisaya_words_known();
  let dictionary_words = object_property_names(dictionary);
  let vocabulary_words = [];
  function common_note(word) {
    let lowered = text_lower_to(word);
    list_add(vocabulary_words, lowered);
  }
  each(common, common_note);
  each(dictionary_words, common_note);
  let vocabulary = list_unique_set(vocabulary_words);
  let vocabulary_none = list_unique_set([]);
  let sentence_total = 0;
  let spelling_total = 0;
  let vocabulary_total = 0;
  let dropped_sightings = 0;
  let rescued_sightings = 0;
  let by_root_dropped = {};
  let by_root_rescued = {};
  function entries_pass(entries) {
    return entries;
  }
  function root_note(holder, root, word, explain) {
    let row = property_get_or_null(holder, root);
    let fresh = null_is(row);
    if (fresh) {
      let made = {
        named_root: root,
        sightings: 0,
        words: [],
        explain: explain,
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
      let s = property_get(entry, word_key);
      let word = text_lower_to(s);
      let sentence = gloss_explain_roots_named(explain);
      let sentence_count = list_size(sentence);
      let sentence_empty = equal(sentence_count, 0);
      if (sentence_empty) {
        return;
      }
      sentence_total = add(sentence_total, 1);
      let spelling = gloss_explain_roots_named_word_given(
        word,
        explain,
        vocabulary_none,
      );
      let spelling_count = list_size(spelling);
      let spelling_empty = equal(spelling_count, 0);
      if (not(spelling_empty)) {
        spelling_total = add(spelling_total, 1);
      }
      let widened = gloss_explain_roots_named_word_given(
        word,
        explain,
        vocabulary,
      );
      let widened_count = list_size(widened);
      let widened_empty = equal(widened_count, 0);
      if (not(widened_empty)) {
        vocabulary_total = add(vocabulary_total, 1);
      }
      if (not(spelling_empty)) {
        return;
      }
      let first = list_get(sentence, 0);
      let root = text_lower_to(first);
      dropped_sightings = add(dropped_sightings, 1);
      root_note(by_root_dropped, root, word, explain);
      if (widened_empty) {
        return;
      }
      rescued_sightings = add(rescued_sightings, 1);
      root_note(by_root_rescued, root, word, explain);
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
  let dropped_listed = listed_of(by_root_dropped);
  let rescued_listed = listed_of(by_root_rescued);
  let count = Number(sample_size);
  let r = {
    sentence_total: sentence_total,
    spelling_total: spelling_total,
    vocabulary_total: vocabulary_total,
    dropped_sightings: dropped_sightings,
    rescued_sightings: rescued_sightings,
    dropped_roots: list_size(dropped_listed),
    rescued_roots: list_size(rescued_listed),
    dropped_shown: list_take(dropped_listed, count),
    rescued_shown: list_take(rescued_listed, count),
  };
  return r;
}
