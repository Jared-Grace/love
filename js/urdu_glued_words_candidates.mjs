import { urdu_bible_verses_texts } from "./urdu_bible_verses_texts.mjs";
import { words_bigrams_tally } from "./words_bigrams_tally.mjs";
import { property_get } from "./property_get.mjs";
import { words_glued_candidates } from "./words_glued_candidates.mjs";
export async function urdu_glued_words_candidates(half_least) {
  "Every word of the Urdu bible that reads as two of its own words with the space missing between them, with how often the welded spelling stands there and how often the spaced one does.";
  "$plain half_least";
  "how often each half has to stand on its own elsewhere in the translation before the word is worth offering: a number, and nothing that runs. Asking it low finds more and offers more that is really one word; asking it high finds only the plainest cases.";
  "The whole translation is read rather than one book of it, because the point of asking is to tell a slip from a habit, and one book cannot.";
  let texts = await urdu_bible_verses_texts();
  let tallies = words_bigrams_tally(texts);
  let words = property_get(tallies, "words");
  let bigrams = property_get(tallies, "bigrams");
  let candidates = words_glued_candidates(words, bigrams, half_least);
  return candidates;
}
