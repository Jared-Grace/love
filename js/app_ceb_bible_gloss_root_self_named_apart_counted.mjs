import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { gloss_explain_roots_self_named } from "./gloss_explain_roots_self_named.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { list_get } from "./list_get.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { text_includes } from "./text_includes.mjs";
import { each } from "./each.mjs";
import { each_async } from "./each_async.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { list_take } from "./list_take.mjs";
export async function app_ceb_bible_gloss_root_self_named_apart_counted(
  sample_size,
) {
  "The one ambiguous wording split by whether the root it names is spelled inside the word it is given for, which is what tells a root from an English meaning in that shape.";
  "★ THE MARK THAT FAILED ACROSS ALL THE SHAPES MAY BE EXACTLY RIGHT FOR THIS ONE, AND THAT IS WHAT THIS ASKS. Testing whether a named root is spelled inside its word over every widened shape flagged 2547 sightings and the ones read were sound - katawhan from tawo, gipamatud-an from matuod. But those sentences all say built on, and built on is precisely where a sound shift is expected and announced. The shape here says the two words are the same thing with a tie run onto it, which is a claim about spelling by construction, so the same mark stops being a guess and starts being what the sentence itself asserts.";
  "Nothing is filtered and nothing is written. Both halves are printed and gathered by the root so the reading can be checked rather than believed, because a mark that is right about a shape is still only a mark.";
  "$plain sample_size";
  "the count says how many roots to print from each half. It names nothing that runs.";
  arguments_assert(arguments, 1);
  let fn = app_ceb_bible_gloss_generate;
  let chapter_codes = await gloss_chapters_stored(fn);
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let explain_key = gloss_entry_explain_key();
  let self_total = 0;
  let inside = 0;
  let outside = 0;
  let by_root_outside = {};
  let by_root_inside = {};
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
      let named = gloss_explain_roots_self_named(explain);
      let count = list_size(named);
      let empty = equal(count, 0);
      if (empty) {
        return;
      }
      self_total = add(self_total, 1);
      let first = list_get(named, 0);
      let root = text_lower_to(first);
      let s = property_get(entry, word_key);
      let word = text_lower_to(s);
      let word_folded = gloss_word_folded(word);
      let root_folded = gloss_word_folded(root);
      let held = text_includes(word_folded, root_folded);
      if (held) {
        inside = add(inside, 1);
        root_note(by_root_inside, root, word, explain);
        return;
      }
      outside = add(outside, 1);
      root_note(by_root_outside, root, word, explain);
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
    function sightings_of(row) {
      let seen = property_get(row, "sightings");
      return seen;
    }
    list_sort_number_mapper_reverse(listed, sightings_of);
    return listed;
  }
  let outside_listed = listed_of(by_root_outside);
  let inside_listed = listed_of(by_root_inside);
  let count2 = Number(sample_size);
  let r = {
    self_total: self_total,
    inside: inside,
    outside: outside,
    outside_roots: list_size(outside_listed),
    inside_roots: list_size(inside_listed),
    outside_shown: list_take(outside_listed, count2),
    inside_shown: list_take(inside_listed, count2),
  };
  return r;
}
