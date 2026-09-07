import { arguments_assert } from "./arguments_assert.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { binisaya_words_known_roots_named } from "./binisaya_words_known_roots_named.mjs";
import { ebible_folder_cebuano } from "./ebible_folder_cebuano.mjs";
import { bible_words_written } from "./bible_words_written.mjs";
import { list_map } from "./list_map.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { list_unique_set } from "./list_unique_set.mjs";
import { gloss_chapters_roots_claimed_gathered } from "./gloss_chapters_roots_claimed_gathered.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { property_get } from "./property_get.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_initialize_list } from "./property_initialize_list.mjs";
import { list_add } from "./list_add.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { add } from "./add.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { not } from "./not.mjs";
import { binisaya_words_known_get } from "./binisaya_words_known_get.mjs";
import { set_includes } from "./set_includes.mjs";
import { each } from "./each.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { list_size } from "./list_size.mjs";
export async function app_ceb_bible_gloss_roots_claimed_unvouched_split() {
  "Every root the Cebuano gloss store names that nothing in the dictionary is built from, split by what the dictionary did when it was asked about that root and by whether the translation ever writes it as a word on its own.";
  "Unvouched is one answer covering three different situations, and they want three different things done about them. A root the site was asked about and had nothing to say for is as close to disproved as this disk can get. A root nobody has ever asked about is a question, and the answer is a gather away. A root the site holds a real entry for is sound, and it is only here because nothing the site knows happens to be built from it.";
  "The three come apart cleanly because a gathered answer with no breakdown in it is stored exactly like an answer about a word the site does not have. That is a defect for a reader asking whether a word exists and it is the whole signal here: the site does not refuse, so an entry with nothing in it means it was asked and it had nothing.";
  "Whether the translation writes the root standing alone is asked beside all three, because a spelling a reader meets on the page is a different thing from a spelling that only exists inside longer words, and a root of the second kind cannot be checked by anybody reading the Bible.";
  "★ THE MIDDLE PILE IS THE WORK AND THE OTHER TWO ARE NOT. Never asked is not a fault, it is an unasked question, and a real entry with nothing built on it is not a fault at all. Counting all three together as unvouched was what made this look like six hundred problems.";
  arguments_assert(arguments, 0);
  let known = await binisaya_words_known();
  let vouched = binisaya_words_known_roots_named(known);
  let bible_folder = ebible_folder_cebuano();
  let written = await bible_words_written(bible_folder);
  let lowered = list_map(written, text_lower_to);
  let vocabulary = list_unique_set(lowered);
  let gathered = await gloss_chapters_roots_claimed_gathered(
    app_ceb_bible_gloss_generate,
  );
  let roots_distinct = property_get(gathered, "roots_distinct");
  let by_root = property_get(gathered, "by_root");
  let roots = object_property_names(by_root);
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
  function root_read(root) {
    let row = property_get(by_root, root);
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
  each(roots, root_read);
  function sightings_of(named) {
    let n = property_get(named, "sightings");
    return n;
  }
  let pile_names = object_property_names(piles);
  function pile_sort(name) {
    let held = property_get(piles, name);
    list_sort_number_mapper_reverse(held, sightings_of);
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
  property_set(answer, "roots_distinct", roots_distinct);
  property_set(answer, "roots", sizes);
  property_set(answer, "sightings", counts);
  property_set(answer, "piles", piles);
  return answer;
}
