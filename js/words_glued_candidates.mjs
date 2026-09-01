import { object_property_names } from "./object_property_names.mjs";
import { subtract } from "./subtract.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { greater_than } from "./greater_than.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export function words_glued_candidates(words, bigrams, bigram_least) {
  "Every word in a body of writing that reads as two of its own words run together with the space missing, judged by the writing itself rather than by a dictionary.";
  "The evidence is the pair tally beside the word tally. A word splits into two halves at some point; if the same body of writing puts those two halves side by side with a space many times over, then that sequence is ordinary in this language and the spaceless spelling is the odd one. Nothing here needs to know what any of the words mean, which is why it works on a language nobody reading the code speaks.";
  "It is a finder and not a mender. Some compounds are real words that were always written closed - a language that welds two of its own small words into one is doing something normal - so what comes back is a list to be read, and the mending is a decision made afterwards and written down.";
  "Where a word could be cut in more than one place, the cut the writing supports most often is the one reported, because the rarer reading of an ambiguous word is the less likely thing to have been meant.";
  "Halves of a single character are not offered. Every script has marks that stand alone as a letter, and cutting one letter off the front of a word finds a pair for almost anything.";
  let found = [];
  for (let word of object_property_names(words)) {
    let last = subtract(word.length, 2);
    let best_before = null;
    let best_after = null;
    let best_count = 0;
    for (let cut = 2; less_than_equal(cut, last); cut++) {
      let before = word.slice(0, cut);
      let after = word.slice(cut);
      let pair = text_combine_multiple([before, " ", after]);
      let seen = bigrams[pair];
      let count = seen ? seen : 0;
      if (greater_than(count, best_count)) {
        best_count = count;
        best_before = before;
        best_after = after;
      }
    }
    if (greater_than_equal(best_count, bigram_least)) {
      let glued = property_get(words, word);
      let candidate = {
        word,
        glued,
        before: best_before,
        after: best_after,
        split: best_count,
      };
      list_add(found, candidate);
    }
  }
  function mapper(candidate) {
    let n = property_get(candidate, "glued");
    return n;
  }
  let ranked = list_sort_number_mapper_reverse(found, mapper);
  return ranked;
}
