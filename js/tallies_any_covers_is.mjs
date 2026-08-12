import { arguments_assert } from "./arguments_assert.mjs";
import { tally_covers_is } from "./tally_covers_is.mjs";
export function tallies_any_covers_is(tallies, wanted) {
  arguments_assert(arguments, 2);
  ("Whether any one of several tallies holds everything wanted. Several because what is being asked about is usually one thing cut into runs - a file into its runs of statements - and a want has to be met inside a single run rather than gathered across all of them.");
  ("It stops at the first that does, because the answer is whether any, and the caller is asking in order to decide whether the slow reading is worth doing at all.");
  for (let tally of tallies) {
    let covers = tally_covers_is(tally, wanted);
    if (covers) {
      return true;
    }
  }
  return false;
}
