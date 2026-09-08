import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { binisaya_words_known_roots_named } from "./binisaya_words_known_roots_named.mjs";
import { ebible_folder_cebuano } from "./ebible_folder_cebuano.mjs";
import { bible_words_written_lowered_set } from "./bible_words_written_lowered_set.mjs";
import { property_initialize_list } from "./property_initialize_list.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { add } from "./add.mjs";
import { property_set } from "./property_set.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { not } from "./not.mjs";
import { binisaya_words_known_get } from "./binisaya_words_known_get.mjs";
import { set_includes } from "./set_includes.mjs";
import { gloss_chapters_roots_claimed_rows_generic } from "./gloss_chapters_roots_claimed_rows_generic.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { gloss_row_sightings } from "./gloss_row_sightings.mjs";
import { each } from "./each.mjs";
import { list_size } from "./list_size.mjs";
export async function app_ceb_bible_gloss_roots_claimed_unvouched_split() {
  "Every root the Cebuano gloss store names that nothing in the dictionary is built from, split by what the dictionary did when it was asked about that root and by whether the translation ever writes it as a word on its own.";
  "Unvouched is one answer covering three different situations, and they want three different things done about them. A root the site holds a full breakdown for is a root the site says is not a root, because a breakdown names what the word was built out of. A root nobody has ever asked about is a question, and the answer is a gather away. A root the site was asked about and had no breakdown for is the ordinary shape of a real root and also the shape of a word the site does not have, and those two cannot be told apart here at all.";
  "The three come apart because a gathered answer with no breakdown in it is stored exactly like an answer about a word the site does not have - four fields with three of them empty. That sameness is what makes the middle pile ambiguous rather than damning: kamot, bulak and likod are all stored that way, and they are ordinary Cebuano roots stored that way precisely because a root is not built out of anything for the site to report.";
  "Whether the translation writes the root standing alone is asked beside all three, because a spelling a reader meets on the page is a different thing from a spelling that only exists inside longer words, and a root of the second kind cannot be checked by anybody reading the Bible.";
  ("★ THE PILE THE DICTIONARY ACTUALLY CONTRADICTS IS THE FULL ONE, NOT THE EMPTY ONE. Held with a breakdown means the site was asked about the claimed root and answered that it comes from something else: galingon, named here as the root of kaugalingon, is held by the site as galing plus -on. That is the store's claim refuted in the dictionary's own words, and it is the only one of the three piles where anything is refuted. It already has its own reading in ",
    fn_name("app_ceb_bible_gloss_roots_store_claim_derived_proven"),
    ", which found the same habit and named it, so what is here is a cross-check and not a second work list.");
  ("★ THE EMPTY PILE IS NOT PROOF OF ANYTHING AND IT IS STILL WHERE TO LOOK. Nothing in it is refuted and a good half of it reads as ordinary vocabulary, so it must never be reported as invented roots. What earns it the looking is that every invented root has to be in it, because the site cannot have a breakdown for letters nobody ever wrote; it is the smallest pile that is certain to hold them.");
  arguments_assert(arguments, 0);
  let known = await binisaya_words_known();
  let vouched = binisaya_words_known_roots_named(known);
  let bible_folder = ebible_folder_cebuano();
  let vocabulary = await bible_words_written_lowered_set(bible_folder);
  let piles = {};
  let counts = {};
  function pile_add(name, row) {
    property_initialize_list(piles, name);
    let held = property_get(piles, name);
    list_add(held, row);
    let was = property_get_or_null(counts, name);
    let fresh = null_is(was);
    if (fresh) {
      was = 0;
    }
    let sightings = property_get(row, "sightings");
    let value = add(was, sightings);
    property_set(counts, name, value);
  }
  function root_read(row) {
    let root = property_get(row, "stated_root");
    let folded = gloss_word_folded(root);
    let spoken_for = property_get_or_null(vouched, folded);
    let b = null_is(spoken_for);
    let stands = not(b);
    if (stands) {
      return;
    }
    let entry = binisaya_words_known_get(known, root);
    let b2 = null_is(entry);
    let asked = not(b2);
    let pile = "never_asked";
    if (asked) {
      let analysed = property_get_or_null(entry, "analysed");
      let empty = not(analysed);
      pile = "held_with_nothing";
      if (not(empty)) {
        pile = "held_and_full";
      }
    }
    let named = {
      stated_root: root,
      sightings: property_get(row, "sightings"),
      written_alone: set_includes(vocabulary, root),
      words: property_get(row, "words"),
      chapters: property_get(row, "chapters"),
      explain: property_get(row, "explain"),
    };
    pile_add(pile, named);
  }
  let gathered = await gloss_chapters_roots_claimed_rows_generic(
    app_ceb_bible_gloss_generate,
    root_read,
  );
  let pile_names = object_property_names(piles);
  function pile_sort(name) {
    let held = property_get(piles, name);
    list_sort_number_mapper_reverse(held, gloss_row_sightings);
  }
  each(pile_names, pile_sort);
  let sizes = {};
  function size_note(name) {
    let held = property_get(piles, name);
    let value2 = list_size(held);
    property_set(sizes, name, value2);
  }
  each(pile_names, size_note);
  let answer = {};
  let roots_distinct = property_get(gathered, "roots_distinct");
  property_set(answer, "roots_distinct", roots_distinct);
  property_set(answer, "roots", sizes);
  property_set(answer, "sightings", counts);
  property_set(answer, "piles", piles);
  return answer;
}
