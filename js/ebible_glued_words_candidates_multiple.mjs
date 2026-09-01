import { ebible_verses_texts } from "./ebible_verses_texts.mjs";
import { words_bigrams_tally } from "./words_bigrams_tally.mjs";
import { property_get } from "./property_get.mjs";
import { words_glued_candidates } from "./words_glued_candidates.mjs";
import { list_add } from "./list_add.mjs";
export async function ebible_glued_words_candidates_multiple(
  bible_folder,
  half_least,
  parts_multiple,
) {
  "The run-together words of one downloaded translation, answered for several numbers of pieces at once, off a single reading of it.";
  "$plain bible_folder";
  "which translation to read, spelled the way the download names it: a word, and nothing that runs.";
  "$plain half_least";
  "how often the rarest piece has to stand on its own elsewhere in the translation before the word is worth offering: a number, and nothing that runs.";
  "$plain parts_multiple";
  "the numbers of pieces to try reading each word as, in the order the answers should come back.";
  "Asking two questions of the same book cost two readings of it before this existed, and the reading is nearly all of the work: the counting of words and pairs is what takes the time, and it does not change between one number of pieces and the next. So it is done once and each question is asked of the same counts.";
  "The answers come back one to a number rather than heaped together, because a word welded in two places is a different finding from a word welded in one, and whoever is ruling on them wants to know which question turned it up.";
  let texts = await ebible_verses_texts(bible_folder);
  let tallies = words_bigrams_tally(texts);
  let words = property_get(tallies, "words");
  let bigrams = property_get(tallies, "bigrams");
  let answered = [];
  for (let parts of parts_multiple) {
    let candidates = words_glued_candidates(words, bigrams, half_least, parts);
    let row = {
      parts,
      candidates,
    };
    list_add(answered, row);
  }
  return answered;
}
