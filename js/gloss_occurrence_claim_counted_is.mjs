import { arguments_assert } from "./arguments_assert.mjs";
import { property_not } from "./property_not.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
export function gloss_occurrence_claim_counted_is(claim) {
  arguments_assert(arguments, 1);
  ("Whether this occurrence claim is one a count can be compared against.");
  ("Two things have to hold. The sentence has to be about this chapter rather than");
  ("about an earlier coming of the word, and the ordinal word in it has to be one");
  ("the table of written numbers knows, so that there is a number to compare at all.");
  ("Every reading of these claims needs the same pair, so it is asked in one place.");
  let elsewhere = property_not(claim, "about_this");
  if (elsewhere) {
    return false;
  }
  let claimed = property_get(claim, "claimed");
  let unread = null_is(claimed);
  let counted = not(unread);
  return counted;
}
