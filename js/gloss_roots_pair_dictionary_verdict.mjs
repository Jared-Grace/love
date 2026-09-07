import { arguments_assert } from "./arguments_assert.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
export function gloss_roots_pair_dictionary_verdict(
  first_folded,
  second_folded,
  first_root,
  second_root,
) {
  "What the dictionary settles about two roots one store named for the same word: that one of them is the other's root, that both come from a third, that they come from different words, or that it cannot say.";
  "This is the judgment on its own, apart from the walk that gathers the pairs and the lookups that fill in what the dictionary holds, so that all four answers can be shown to happen. A verdict reached inside a sweep is a verdict nobody can put a known case to, and a branch nobody can reach is a branch that reports no faults for the same reason a working one reports none.";
  "★ CONTRADICTION IS THE ONLY ANSWER THAT ACCUSES, AND IT IS THE ONE THAT NEEDS BOTH HALVES KNOWN. Where the dictionary vouches for one root and says nothing about the other, the half it knows tells us nothing whatever about the half it does not, so the pair goes back as unsettled rather than as wrong. A reading that let a single known half decide would be reporting how much of the dictionary has been gathered while appearing to report how correct the store is.";
  "A root the dictionary takes back to nothing arrives here as nothing, and the two ways that happens - never gathered, or gathered with no breakdown on the page - are deliberately not told apart. Neither one is evidence about the pair, and giving them separate answers would invite a reader to treat one of them as a weak yes.";
  "$plain first_folded";
  "$plain second_folded";
  "$plain first_root";
  "$plain second_root";
  "the first two name the roots the store claimed, folded; the second two name what the dictionary takes each of those back to, folded, or nothing where it does not. None of them names anything that runs.";
  arguments_assert(arguments, 4);
  let first_missing = null_is(first_root);
  let first_known = not(first_missing);
  let second_missing = null_is(second_root);
  let second_known = not(second_missing);
  if (first_known) {
    let under = equal(first_root, second_folded);
    if (under) {
      let depth = "depth";
      return depth;
    }
  }
  if (second_known) {
    let under = equal(second_root, first_folded);
    if (under) {
      let depth = "depth";
      return depth;
    }
  }
  let both_known = first_known && second_known;
  if (not(both_known)) {
    let unproved = "unproved";
    return unproved;
  }
  let same_origin = equal(first_root, second_root);
  if (same_origin) {
    let shared = "shared";
    return shared;
  }
  let wrong = "contradiction";
  return wrong;
}
