import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
export function js_keyword_truth_of(word) {
  arguments_assert(arguments, 1);
  ("the true or the false a word of code spells: the word true gives back true, and every other word gives back false");
  ("It is asked as whether the word is the word true rather than as which of the two words it is, because the callers only ever hand it one of those two. Asked the other way it would need a second comparison saying nothing new, and a word that was neither would have to be answered with something invented.");
  ("A line read back off its own printing is where this is wanted. The printing turned a true into the word true, and this is the same step walked the other way, so the shape a lesson built and the shape it reads back hold the same two values rather than one of each kind.");
  let word_true = js_keyword_true();
  let truth = equal(word, word_true);
  return truth;
}
