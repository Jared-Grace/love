import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { html_hash_name_get } from "./html_hash_name_get.mjs";
import { bless_hash_street } from "./bless_hash_street.mjs";
export function app_g_bless_door_skipped_is() {
  arguments_assert(arguments, 0);
  ("Whether this visit is being asked to open straight onto the street, past the prayer at");
  ("the door.");
  ("For the person BUILDING the game, and for nobody else. The door prayer is the first");
  ("thing on the screen and it deliberately cannot be pressed until it has been read - which");
  ("is right for a player praying it once, and is the wrong price to pay forty times in an");
  ("afternoon by somebody reloading to look at the pavement. Without a way past it, the cost");
  ("of checking anything on this screen is a prayer said carelessly, and a prayer said");
  ("carelessly is worse than a prayer not said here at all.");
  ("Asked of the address rather than remembered, so it is spelled afresh in the link every");
  ("time and no visit inherits it. A skip that stuck would be a skip a player could fall");
  ("into: the one prayer this game is built around, turned off by a setting nobody knew was");
  ("on. Typed into the address, it cannot outlive the tab it was typed in.");
  ("It skips only the door. Every prayer over a person is still read and still waited for,");
  ("because those are what the screen under test actually does - a way past THOSE would be a");
  ("way of testing the game without the game.");
  let name = html_hash_name_get();
  let street = bless_hash_street();
  let skipped = equal(name, street);
  return skipped;
}
