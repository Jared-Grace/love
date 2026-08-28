import { arguments_assert } from "./arguments_assert.mjs";
import { html_hash_name_get } from "./html_hash_name_get.mjs";
import { bless_hash_street_openings } from "./bless_hash_street_openings.mjs";
import { list_includes } from "./list_includes.mjs";
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
  ("Any opening does it, not one particular word. What they have in common is what matters");
  ("here - each of them hands over the real street to somebody who came to work on it - and");
  ("a new opening that had to remember to name itself here would be an address that put the");
  ("door back up for no reason anybody could see.");
  let name = html_hash_name_get();
  let openings = bless_hash_street_openings();
  let skipped = list_includes(openings, name);
  return skipped;
}
