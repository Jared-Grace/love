import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapters_roots_claimed_gathered } from "./gloss_chapters_roots_claimed_gathered.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_folder_cebuano } from "./ebible_folder_cebuano.mjs";
import { bible_words_written } from "./bible_words_written.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_unique_set } from "./list_unique_set.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { text_includes } from "./text_includes.mjs";
import { not } from "./not.mjs";
import { add } from "./add.mjs";
import { text_replace } from "./text_replace.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { binisaya_words_known_get } from "./binisaya_words_known_get.mjs";
import { property_set } from "./property_set.mjs";
import { set_includes } from "./set_includes.mjs";
import { null_is } from "./null_is.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { list_size } from "./list_size.mjs";
export async function app_ceb_bible_gloss_roots_claimed_bracketed_priced() {
  "Every root an explanation states outright with a bracket in it, read both ways the bracket can be meant, with each reading put to the bible's words, to the dictionary, and to the word the root was claimed for.";
  "A dictionary writes lagi(w) to say one headword covers two spellings, and a root copied out of one carries the bracket into a store where nothing knows what it means. The bracket has two readings and they are opposites: keep the letter and the root is lagiw, drop it and the root is lagi. Guessing between them is not needed, because the word the sentence was explaining decides. Mokalagiw holds lagiw and does not hold lagi, so for that sentence one reading is inside the word and the other is not.";
  "★ THE WORD DECIDES AND THE VOCABULARIES ONLY AGREE OR DISAGREE. A root can stand in the bible and still be the wrong reading of the bracket, because both readings are often real words. Standing inside the word that was being explained is the test that separates them, and it is the one carried here alongside the other two rather than instead of them.";
  "The pricing of the accent marks beside this one came back at nothing bought, and that is the reason this is a separate reading rather than a further column there. A bracket and an accent are both a dictionary's notation leaking into a store, and that is all they have in common: the accent has one repair and this has two, the accent's repair lost a dictionary lookup and this one cannot, and a reading that answered for both would have had to average them.";
  "Spellings are folded before the word is asked, the way the rest of the gloss code folds them, so that a root and its word written with different letters for one sound still meet.";
  "Nothing is written and nothing is asked of the site.";
  arguments_assert(arguments, 0);
  let gathered = await gloss_chapters_roots_claimed_gathered(
    app_ceb_bible_gloss_generate,
  );
  let by_root = property_get(gathered, "by_root");
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
  let bracketed_span = new RegExp("\\([^)]*\\)", "g");
  let root_names = object_property_names(by_root);
  let listed = [];
  let bracketed_sightings = 0;
  function root_price(name) {
    let opened = text_includes(name, "(");
    if (not(opened)) {
      return;
    }
    let row = property_get(by_root, name);
    let sightings = property_get(row, "sightings");
    bracketed_sightings = add(bracketed_sightings, sightings);
    let without_open = text_replace(name, "(", "");
    let kept = text_replace(without_open, ")", "");
    let dropped = name.replace(bracketed_span, "");
    let kept_folded = gloss_word_folded(kept);
    let dropped_folded = gloss_word_folded(dropped);
    let words = property_get(row, "words");
    let kept_inside = false;
    let dropped_inside = false;
    function word_ask(word) {
      let folded = gloss_word_folded(word);
      let holds_kept = text_includes(folded, kept_folded);
      if (holds_kept) {
        kept_inside = true;
      }
      let holds_dropped = text_includes(folded, dropped_folded);
      if (holds_dropped) {
        dropped_inside = true;
      }
    }
    each(words, word_ask);
    let kept_held = binisaya_words_known_get(known, kept);
    let dropped_held = binisaya_words_known_get(known, dropped);
    property_set(row, "kept", kept);
    property_set(row, "dropped", dropped);
    property_set(row, "kept_inside_word", kept_inside);
    property_set(row, "dropped_inside_word", dropped_inside);
    let value = set_includes(vocabulary, kept);
    property_set(row, "kept_written", value);
    let value2 = set_includes(vocabulary, dropped);
    property_set(row, "dropped_written", value2);
    let b = null_is(kept_held);
    let value3 = not(b);
    property_set(row, "kept_known", value3);
    let b2 = null_is(dropped_held);
    let value4 = not(b2);
    property_set(row, "dropped_known", value4);
    let settled = kept_inside;
    if (dropped_inside) {
      settled = false;
    }
    property_set(row, "word_settles_it", settled);
    list_add(listed, row);
  }
  each(root_names, root_price);
  function sightings_of(row) {
    let seen = property_get(row, "sightings");
    return seen;
  }
  list_sort_number_mapper_reverse(listed, sightings_of);
  let r = {
    chapters: property_get(gathered, "chapters"),
    roots_distinct: property_get(gathered, "roots_distinct"),
    bracketed_roots: list_size(listed),
    bracketed_sightings,
    listed,
  };
  return r;
}
