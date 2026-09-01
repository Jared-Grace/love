import { object_property_names } from "./object_property_names.mjs";
import { subtract } from "./subtract.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { math_min } from "./math_min.mjs";
import { greater_than } from "./greater_than.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export function words_glued_candidates(words, bigrams, half_least) {
  "Every word in a body of writing that reads as two of the writing's own ordinary words run together with the space missing between them.";
  "A word is offered where it can be cut in two so that BOTH halves are words the writing uses on their own, often. That is all the evidence there is, and it is deliberately not enough to act on by itself: a language is free to weld two of its own small words into a real closed compound, and no counting tells that apart from a space that went missing. What comes back is a list for somebody who knows the language to rule on, one word at a time.";
  "How often the two halves stand side by side WITH a space is reported beside each one, and it is worth reading even though it decides nothing. It was tried as the whole test first and it failed: in the Urdu bible the spaced spelling of the welded pairs turns up nought times out of nought, because whatever welded them welded every one of them. A defect that is thorough looks exactly like a convention, and only the same pair being spelled both ways somewhere else in the same book gives it away.";
  "Where a word can be cut in more than one place, the cut is the one whose weaker half is the commonest word, because a cut is only as good as the rarer of the two words it claims to have found.";
  "Halves of a single character are not offered. Every script has marks that stand alone as a letter, and cutting one letter off the front finds a pair for almost anything.";
  let found = [];
  for (let word of object_property_names(words)) {
    let last = subtract(word.length, 2);
    let best_before = null;
    let best_after = null;
    let best_weakest = 0;
    for (let cut = 2; less_than_equal(cut, last); cut++) {
      let before = word.slice(0, cut);
      let after = word.slice(cut);
      let seen_before = words[before];
      let seen_after = words[after];
      let count_before = seen_before ? seen_before : 0;
      let count_after = seen_after ? seen_after : 0;
      let weakest = math_min(count_before, count_after);
      if (greater_than(weakest, best_weakest)) {
        best_weakest = weakest;
        best_before = before;
        best_after = after;
      }
    }
    if (greater_than_equal(best_weakest, half_least)) {
      let glued = property_get(words, word);
      let pair = text_combine_multiple([best_before, " ", best_after]);
      let seen_pair = bigrams[pair];
      let spaced = seen_pair ? seen_pair : 0;
      let candidate = {
        word,
        glued,
        before: best_before,
        after: best_after,
        weakest: best_weakest,
        spaced,
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
