import { arguments_assert } from "./arguments_assert.mjs";
import { bless_hash_street_opening_is } from "./bless_hash_street_opening_is.mjs";
export function app_g_bless_door_skipped_is() {
  arguments_assert(arguments, 0);
  ("Whether this visit is being asked to open straight onto the street, past the prayer at the door.");
  ("For the person BUILDING the game, and for nobody else. The door prayer is the first thing on the screen and it deliberately cannot be pressed until it has been read - which is right for a player praying it once, and is the wrong price to pay forty times in an afternoon by somebody reloading to look at the pavement. Without a way past it, the cost of checking anything on this screen is a prayer said carelessly, and a prayer said carelessly is worse than a prayer not said here at all.");
  ("Naming the door as the thing skipped is the whole of what is this one's own. Whether the address asks for a skip at all is the same question for every skip and is asked once next door, which is also where the reasons it is read off the address rather than remembered are written down.");
  let skipped = bless_hash_street_opening_is();
  return skipped;
}
