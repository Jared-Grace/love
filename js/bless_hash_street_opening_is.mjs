import { arguments_assert } from "./arguments_assert.mjs";
import { bless_hash_street_openings } from "./bless_hash_street_openings.mjs";
import { bless_hash_words_is } from "./bless_hash_words_is.mjs";
export function bless_hash_street_opening_is() {
  arguments_assert(arguments, 0);
  ("Whether the address this visit was opened with names one of the openings onto the street.");
  ("ANY STREET OPENING DOES IT, not one particular word. What they have in common is what matters - each of them hands over the real street to somebody who came to work on it - and a new one that had to name itself at each skip would be an address that put a panel back up for no reason anybody could see.");
  ("It is the NARROWER of the two questions, and the panel over a person is what it is for. The map is an opening too and is deliberately not one of these: somebody standing further back is still praying the game, so every panel still goes up for them. The wider question is asked next door, and the door prayer is asked through that one.");
  ("Asked of the address rather than remembered, for the reason written where the address is read.");
  let openings = bless_hash_street_openings();
  let opening_is = bless_hash_words_is(openings);
  return opening_is;
}
