import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_dev_shown_is } from "./app_shared_dev_shown_is.mjs";
import { not } from "./not.mjs";
import { html_hash_name_get } from "./html_hash_name_get.mjs";
import { bless_hash_street_openings } from "./bless_hash_street_openings.mjs";
import { list_includes } from "./list_includes.mjs";
export function app_g_bless_prayer_skipped_is() {
  arguments_assert(arguments, 0);
  ("Whether tapping a person should count as the prayer having been said, with no panel put");
  ("up and nothing to read.");
  ("The door skip used to stop at the door, and said so: every prayer over a person was");
  ("still read and still waited for, because those are what the screen actually does. That");
  ("reasoning was right about the game and wrong about the arithmetic. Reaching a household");
  ("celebration costs three prayers, and reaching the one after it costs three more - so a");
  ("builder checking a flash forty times pays a hundred and twenty prayers said with their");
  ("eyes somewhere else. The argument that a prayer said carelessly is worse than a prayer");
  ("not said here at all is the SAME argument, and it turns out to bear harder on the panel");
  ("than on the door, because there is one door and there is a panel per person.");
  ("What is under test is not lost by it. The panel is words to read and a button to press;");
  ("everything this skip is for - the light on the face, the ground turning, the camera, the");
  ("flash, the count - happens after that button and happens unchanged.");
  ("Only behind an opening, and only where the dev tools are offered at all. A player who");
  ("came to play never reaches an address that says this, and the game they get is the game");
  ("with the prayer in it.");
  let shown = app_shared_dev_shown_is();
  if (not(shown)) {
    return false;
  }
  let name = html_hash_name_get();
  let openings = bless_hash_street_openings();
  let skipped = list_includes(openings, name);
  return skipped;
}
