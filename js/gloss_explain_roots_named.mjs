import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_explain_roots_claimed } from "./gloss_explain_roots_claimed.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { text_regex_first_groups } from "./text_regex_first_groups.mjs";
export function gloss_explain_roots_named(explain) {
  "Every root a gloss explanation names, read in either of the two wordings the store actually uses for it.";
  "$plain explain";
  "the explanation is the sentence a reader sees under a word. Nothing here runs it or writes it.";
  "★ THE READER BESIDE THIS ONE ANSWERS ABOUT ONE WORDING AND WAS BEING READ AS ANSWERING ABOUT THE STORE. It matches the word root followed by a quoted word, and its own prose says so and tells a caller to fall back to a weaker test on an empty answer. Four readings built on it did not fall back, so an explanation writing it is built on 'buhat', to do, with 'gi-' in front was counted as naming no root, and the word it named was counted as unexplained.";
  "Measured on 2026-09-07 over the 258651 entries in the store: 42484 name a root with the word root, and a further 13184 name one with built on and no other wording. So a quarter of the naming in the store was invisible to every reading of it, and a reading that found a word rooted in one chapter and bare in another was often looking at the same claim written twice.";
  "The stricter wording is asked first and this hands back its answer whole when it has one, so nothing that was already read changes. The looser wording is only reached when the strict one is silent, which is what keeps this from turning one claim into two.";
  "Two wordings and no more, because those are the two the corpus writes. A third, if one is found, belongs here rather than in a caller.";
  arguments_assert(arguments, 1);
  let claimed = gloss_explain_roots_claimed(explain);
  let count = list_size(claimed);
  let empty = equal(count, 0);
  if (not(empty)) {
    return claimed;
  }
  let pattern = new RegExp("built on\\s+['‘\"]([^'’\"]+?)[,.;:!?]?['’\"]", "g");
  let built = text_regex_first_groups(explain, pattern);
  return built;
}
