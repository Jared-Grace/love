import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
export function bless_prayer_of(right) {
  arguments_assert(arguments, 1);
  ("The prayer, given who or what it is for - 'God save and bless ' and then the rest.");
  ("Every rung of the ladder prays these same four words and differs only in what follows,");
  ("which is the point of the ladder: praying for a city is not a different prayer from");
  ("praying for one person, it is the same prayer said of more people. Written once here, so");
  ("no rung can quietly word it differently as the game climbs.");
  ("SAVED comes before BLESSED, and the order is the order of need rather than a turn of");
  ("phrase. A blessing asked for somebody who is not saved is asked for this life only, so");
  ("praying it first would be praying for their comfort and remembering their soul after -");
  ("and a prayer said thousands of times in one sitting teaches its own order to whoever is");
  ("reading it. Asking to be saved first also keeps this game honest about what it is: the");
  ("gospel game's sibling, where the greatest thing anybody can be given is still the same");
  ("thing.");
  ("Blessing is not dropped for it either. God gives daily bread as well as salvation, and a");
  ("prayer that asked only for the soul would be praying for half a person.");
  let text = text_combine("God save and bless ", right);
  return text;
}
