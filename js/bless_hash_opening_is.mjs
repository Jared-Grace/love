import { arguments_assert } from "./arguments_assert.mjs";
import { bless_hash_openings } from "./bless_hash_openings.mjs";
import { bless_hash_words_is } from "./bless_hash_words_is.mjs";
export function bless_hash_opening_is() {
  arguments_assert(arguments, 0);
  ("Whether the address this visit was opened with names any opening at all - onto the street or onto the map.");
  ("ANY OPENING DOES IT, not one particular word, and that is the whole of what this asks. What every opening has in common is that somebody typed a word to come and work on the street; a new opening that had to remember to name itself would be an address that put a door back up for no reason anybody could see.");
  ("It is the WIDER of the two questions. Its neighbour asks only about the openings onto the street, because what those take away - the panel over each person - must not be taken away from a visit that only asked to stand further back. This one is asked where the answer is the same for every opening there is.");
  let openings = bless_hash_openings();
  let opening_is = bless_hash_words_is(openings);
  return opening_is;
}
