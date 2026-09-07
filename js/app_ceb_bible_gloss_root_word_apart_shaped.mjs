import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { add } from "./add.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { gloss_explain_roots_claimed } from "./gloss_explain_roots_claimed.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { list_get } from "./list_get.mjs";
import { gloss_root_claimed_relation } from "./gloss_root_claimed_relation.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { not } from "./not.mjs";
import { gloss_root_claimed_shape } from "./gloss_root_claimed_shape.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { each } from "./each.mjs";
import { each_async } from "./each_async.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export async function app_ceb_bible_gloss_root_word_apart_shaped() {
  "Every Cebuano word whose explanation names a root standing apart from the word itself, put through the reader of ordinary Cebuano shapes, so that the ones a known shape accounts for are separated from the ones nobody has an account of.";
  "The reading of the pair says apart wherever neither word holds the other and they share no run of four letters. Between two roots that means what it says. Between a word and the root it was built from it mostly does not, and the reader of the pair says so itself: Cebuano drops the vowel out of a root's last syllable when a suffix goes on, so kusgan stands apart from kusog and sulugoon from sugo, both of them correct. The reader of shapes was written for exactly that difference and has only ever been asked about pairs of roots - two hundred and four sightings of them. This asks it about the other pool.";
  "★ THE ONLY THING THIS DECIDES IS WHICH PILE A WORD GOES IN, AND A NAMED SHAPE IS NOT A VERDICT THAT THE EXPLANATION IS RIGHT. A dropped vowel accounts for the spelling and says nothing about whether the root is the one this word was really built from; a made-up root that happens to differ by a vowel would be named a shape and let through. What the shape pile is worth is the other direction - it is the pile nobody needs to read, so that the pile somebody does need to read is what is left.";
  "The whole distribution of the reading is handed back and not only the apart share, because the number this stands on was written down inside another function as a measurement taken once. A count reproduced beside the work that uses it is a count that cannot quietly rot; if the store has been authored since, the figure here moves and says so.";
  "The words answering shallower are named rather than counted, for the same reason the apart ones are. Shallower is the one answer in the five that cannot be ordinary: it says the root an explanation gives holds the whole word inside it, so the thing offered as the origin is longer than what was supposedly built from it. The reader of the pair calls that out by name as the fault these explanations exist to avoid - handing somebody an affixed form as though it were the root. There is no pile of them to sort through, and a single sighting left as the numeral one is a fault nobody can walk to.";
  "Words are counted apart from sightings throughout. One explanation is stored again for every place its word appears, so sightings say how much of what a person sees is affected and words say how much there is to read. They differ by more than tenfold here and quoting either one alone would mislead.";
  "The first root the explanation names is the one asked about, which is the same choice every other strict reading over this store makes. Where a sentence names two, the second is passed over here and is not lost - the readings of roots against a dictionary look at all of them.";
  arguments_assert(arguments, 0);
  let fn = app_ceb_bible_gloss_generate;
  let chapter_codes = await gloss_chapters_stored(fn);
  let explain_key = gloss_entry_explain_key();
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let strict_total = 0;
  let relation_sightings = {};
  let apart_rows = [];
  let apart_seen = {};
  let shallower_rows = [];
  let shallower_seen = {};
  function entries_pass(entries) {
    return entries;
  }
  function tally(counts, name) {
    let before = property_get_or_null(counts, name);
    let first = null_is(before);
    if (first) {
      property_set(counts, name, 1);
      return;
    }
    let after = add(before, 1);
    property_set(counts, name, after);
  }
  function sighting_keep(seen, rows, key, row) {
    let before = property_get_or_null(seen, key);
    let first = null_is(before);
    if (first) {
      property_set(seen, key, row);
      list_add(rows, row);
      return;
    }
    let met = property_get(before, "sightings");
    let after = add(met, 1);
    property_set(before, "sightings", after);
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
      let read = list_get(claimed, 0);
      let word = property_get(entry, word_key);
      let relation = gloss_root_claimed_relation(word, read);
      tally(relation_sightings, relation);
      let key = text_combine_multiple([word, " ", read]);
      let backwards = equal(relation, "shallower");
      if (backwards) {
        let told = {
          word,
          read,
          chapter: chapter_code,
          sightings: 1,
          explain,
        };
        sighting_keep(shallower_seen, shallower_rows, key, told);
        return;
      }
      let near = equal(relation, "apart");
      if (not(near)) {
        return;
      }
      let shape = gloss_root_claimed_shape(word, read);
      let unnamed = text_empty_is(shape);
      let named_shape = shape;
      if (unnamed) {
        named_shape = "none";
      }
      let row = {
        word,
        read,
        shape: named_shape,
        chapter: chapter_code,
        sightings: 1,
      };
      sighting_keep(apart_seen, apart_rows, key, row);
    }
    each(entries, entry_read);
  }
  await each_async(chapter_codes, chapter_read);
  let shape_words = {};
  let shape_sightings = {};
  let residue = [];
  function row_read(row) {
    let shape = property_get(row, "shape");
    tally(shape_words, shape);
    let seen = property_get(row, "sightings");
    let before = property_get_or_null(shape_sightings, shape);
    let first = null_is(before);
    if (first) {
      property_set(shape_sightings, shape, seen);
    }
    if (not(first)) {
      let after = add(before, seen);
      property_set(shape_sightings, shape, after);
    }
    let unaccounted = equal(shape, "none");
    if (unaccounted) {
      list_add(residue, row);
    }
  }
  each(apart_rows, row_read);
  function sightings_of(row) {
    let seen = property_get(row, "sightings");
    return seen;
  }
  list_sort_number_mapper_reverse(residue, sightings_of);
  let r = {
    chapters: list_size(chapter_codes),
    strict_total,
    relation_sightings,
    apart_words: list_size(apart_rows),
    shape_words,
    shape_sightings,
    shallower_words: list_size(shallower_rows),
    shallower_rows,
    residue_words: list_size(residue),
    residue,
  };
  return r;
}
