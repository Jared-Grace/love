import { ebible_verses_texts } from "./ebible_verses_texts.mjs";
import { words_bigrams_tally } from "./words_bigrams_tally.mjs";
import { property_get } from "./property_get.mjs";
import { words_glued_candidates } from "./words_glued_candidates.mjs";
export async function ebible_glued_words_candidates(bible_folder, half_least) {
  "Every word of one downloaded translation that reads as two of its own words with the space missing between them, with how often the welded spelling stands there and how often the spaced one does.";
  "$plain bible_folder";
  "which translation to read, spelled the way the download names it: a word, and nothing that runs.";
  "$plain half_least";
  "how often each half has to stand on its own elsewhere in the translation before the word is worth offering: a number, and nothing that runs. Asking it low finds more and offers more that is really one word; asking it high finds only the plainest cases.";
  "The whole translation is read rather than one book of it, because the point of asking is to tell a slip from a habit, and one book cannot.";
  "Nothing here knows one language from another. What comes back is a list for somebody who reads the translation to rule on, and a language that welds two of its own small words on purpose will fill that list with words that are perfectly well spelled.";
  let texts = await ebible_verses_texts(bible_folder);
  let tallies = words_bigrams_tally(texts);
  let words = property_get(tallies, "words");
  let bigrams = property_get(tallies, "bigrams");
  let candidates = words_glued_candidates(words, bigrams, half_least);
  return candidates;
}
