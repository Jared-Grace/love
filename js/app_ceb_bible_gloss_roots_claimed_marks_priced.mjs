import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_cebuano } from "./ebible_folder_cebuano.mjs";
import { bible_words_written_lowered_set } from "./bible_words_written_lowered_set.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { property_get } from "./property_get.mjs";
import { text_accent_marks_removed } from "./text_accent_marks_removed.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
import { set_includes } from "./set_includes.mjs";
import { binisaya_words_known_held_is } from "./binisaya_words_known_held_is.mjs";
import { property_set } from "./property_set.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { gloss_chapters_roots_claimed_rows_generic } from "./gloss_chapters_roots_claimed_rows_generic.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { gloss_row_sightings } from "./gloss_row_sightings.mjs";
import { list_size } from "./list_size.mjs";
export async function app_ceb_bible_gloss_roots_claimed_marks_priced() {
  "What taking the accent marks off a stated root would actually buy: every root written with one, and whether the same root without it is a word the bible writes or a word the dictionary holds.";
  "The reading of the rare letters found roots written da, tamay and pangganod with a stress mark on a vowel, and the Cebuano bible writes that mark in no word at all, so nothing matching a root against the text can ever meet one. That is a reason to fold the marks away, and a reason is not a price. A fold is worth what it lets a reader find that they could not find before, and a root that is unmatchable with the mark and still unmatchable without it is not helped by folding at all.";
  "So both spellings are put to both vocabularies and the four answers are handed back together. A root that goes from found nowhere to found in the bible is what the fold buys; a root that was already found, or is found neither way, is what it does not.";
  "★ THIS PRICES A CHANGE AND DOES NOT MAKE ONE. The fold used everywhere else in the gloss code is not touched, and a reader is shown nothing different because of this. Whether to change that fold is a decision about text a person sees and belongs to whoever owns those words.";
  "Every word the bible writes is asked rather than only the words it writes outside its names, because the question here is whether this exact spelling stands in the text and a name is text. That is deliberately a different vocabulary from the one the foreign reading asks, which wants the narrower question.";
  "Nothing is written and nothing is asked of the site.";
  "The bible's words and the dictionary are read before the store is walked rather than after, because the walk now carries the pricing with it and the pricing cannot ask a vocabulary that has not arrived. Neither read writes anything, so which of them goes first is a matter of what the next line needs.";
  arguments_assert(arguments, 0);
  let bible_folder = ebible_folder_cebuano();
  let vocabulary = await bible_words_written_lowered_set(bible_folder);
  let known = await binisaya_words_known();
  let listed = [];
  let marked_sightings = 0;
  let bought_roots = 0;
  let bought_sightings = 0;
  function root_price(row) {
    let name = property_get(row, "stated_root");
    let stripped = text_accent_marks_removed(name);
    let same = equal(stripped, name);
    if (same) {
      return;
    }
    let sightings = property_get(row, "sightings");
    marked_sightings = add(marked_sightings, sightings);
    let before_written = set_includes(vocabulary, name);
    let after_written = set_includes(vocabulary, stripped);
    let before_known = binisaya_words_known_held_is(known, name);
    let after_known = binisaya_words_known_held_is(known, stripped);
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
  let gathered = await gloss_chapters_roots_claimed_rows_generic(
    app_ceb_bible_gloss_generate,
    root_price,
  );
  list_sort_number_mapper_reverse(listed, gloss_row_sightings);
  let r = {
    chapters: property_get(gathered, "chapters"),
    strict_total: property_get(gathered, "entries_claiming"),
    roots_total: property_get(gathered, "roots_total"),
    roots_distinct: property_get(gathered, "roots_distinct"),
    marked_roots: list_size(listed),
    marked_sightings,
    bought_roots,
    bought_sightings,
    listed,
  };
  return r;
}
