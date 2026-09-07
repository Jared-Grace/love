import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_root_word_apart_shaped } from "./app_ceb_bible_gloss_root_word_apart_shaped.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { add } from "./add.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { text_shared_run_longest } from "./text_shared_run_longest.mjs";
import { text_size } from "./text_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_size } from "./list_size.mjs";
export async function app_ceb_bible_gloss_root_word_apart_unshared() {
  "The words left over when no ordinary shape of Cebuano writing accounts for the root their explanation names, sorted by how much of the word that root still shares with it - so the ones no affixing rule could ever have produced come out on their own.";
  "Every rule for building a Cebuano word out of a root keeps the root's letters. A piece goes on the front or the end, a vowel drops out of the last syllable, a consonant changes where the two meet - through all of it a run of the root survives in the word, which is why the reading underneath measures a shared run in the first place and calls four letters kin. Turned the other way round the same measure says something a language rule cannot argue with: where a word and its named root share no run of even two letters, no affixing produced one from the other, whatever anybody knows about Cebuano.";
  "★ A SHORT SHARED RUN IS A REASON TO LOOK AND NOT A VERDICT. Three of the pairs sharing a single run are the English meaning of a root rather than a root, put there by a reader that takes the wrong half of a sentence, and one more is the dictionary printing its own shorthand. What the sorting is worth is that it is small enough to read at all: four hundred and two pairs went into the reading underneath and fourteen come out here, and the pile it leaves behind is morphology.";
  "The run of nothing is the interesting end and it holds one pair. Ayaw explained as coming from dili - two ways of saying no, sharing not one letter, forty entries of it. The reading underneath found that same pair by having somebody read the top of a list of four hundred; this is that reading done by a rule, and the value is not the pair but that nobody has to read four hundred rows again to find the next one.";
  "Both halves are folded first, the same folding every reading of these roots uses, so that a d written as an r or an o written as a u never counts as a letter not shared.";
  arguments_assert(arguments, 0);
  let read = await app_ceb_bible_gloss_root_word_apart_shaped();
  let residue = property_get(read, "residue");
  let run_pairs = {};
  let run_entries = {};
  let unshared = [];
  let unshared_entries = 0;
  function tally(counts, name, value) {
    let before = property_get_or_null(counts, name);
    let first = null_is(before);
    if (first) {
      property_set(counts, name, value);
      return;
    }
    let after = add(before, value);
    property_set(counts, name, after);
  }
  function pair_read(pair) {
    let word = property_get(pair, "word");
    let root = property_get(pair, "root");
    let entries = property_get(pair, "entries");
    let word_folded = gloss_word_folded(word);
    let root_folded = gloss_word_folded(root);
    let run = text_shared_run_longest(word_folded, root_folded);
    let held = text_size(run);
    property_set(pair, "shared_run", held);
    let named = held;
    let long_enough = greater_than(held, 1);
    if (long_enough) {
      named = "2 or more";
    }
    tally(run_pairs, named, 1);
    tally(run_entries, named, entries);
    if (long_enough) {
      return;
    }
    list_add(unshared, pair);
    unshared_entries = add(unshared_entries, entries);
  }
  each(residue, pair_read);
  let r = {
    apart_pairs: property_get(read, "apart_pairs"),
    residue_pairs: property_get(read, "residue_pairs"),
    residue_entries: property_get(read, "residue_entries"),
    run_pairs,
    run_entries,
    unshared_pairs: list_size(unshared),
    unshared_entries,
    unshared,
  };
  return r;
}
