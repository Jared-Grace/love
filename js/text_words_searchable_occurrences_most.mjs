import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_words_searchable_occurrences } from "./text_words_searchable_occurrences.mjs";
import { greater_than } from "./greater_than.mjs";
export function text_words_searchable_occurrences_most(searchable, phrases) {
  "Of several runs of words, the one the writing uses most, and how often it uses it.";
  "$plain searchable";
  "the writing to look in, already laid out so that a run of whole words can be looked for in it.";
  "$plain phrases";
  "the runs of words to try, each written as ordinary words with single spaces between them. They are alternatives to each other rather than parts of one thing, so what comes back is the best of them and not their total.";
  "It is here because one word can be cut into words in more than one place, and each cut is a different claim about how the word should be spelled. Asking which of the claims the writing actually makes is one question, not several, and answering it anywhere else would mean deciding twice how to break a tie.";
  "The first of an equal pair wins, so the answer does not move about when two spellings are equally absent. That matters most where every count is nought, which is the ordinary case: then what comes back is the first spelling offered, and a caller can say what was looked for.";
  "An empty list of runs comes back as nothing found, spelled as no phrase and a count of nought, because a word nobody proposed a spacing for is not a word the writing disagrees with.";
  arguments_assert(arguments, 2);
  let best = null;
  let most = 0;
  for (let phrase of phrases) {
    let count = text_words_searchable_occurrences(searchable, phrase);
    let unset = equal(best, null);
    let better = greater_than(count, most);
    let take = unset || better;
    if (take) {
      best = phrase;
      most = count;
    }
  }
  let r = {
    phrase: best,
    count: most,
  };
  return r;
}
