import { arguments_assert } from "./arguments_assert.mjs";
import { html_hash_name_reload } from "./html_hash_name_reload.mjs";
import { app_shared_g_dev_index_hash_name } from "./app_shared_g_dev_index_hash_name.mjs";
import { app_g_dev_pill } from "./app_g_dev_pill.mjs";
export function app_g_bless_dev_entry() {
  arguments_assert(arguments, 0);
  ("The one way into the praying game's dev screens from the street: a small pill in the top");
  ("corner that opens the directory.");
  ("A pill rather than a menu entry, because this game HAS no menu. The gospel game next");
  ("door hangs its dev tools off the panel you get by tapping yourself; here a tap is either");
  ("a prayer or a walk, and inventing a menu to hold one button would add a whole screen to");
  ("the game to avoid adding a corner to it.");
  ("It sits over the map rather than in the bar along the bottom, and that is the cheaper of");
  ("the two. The bar is laid out and every pixel it takes is a pixel of street the player");
  ("cannot see; a floated pill overlaps a corner of ground and moves nothing. The map is");
  ("what this game is looking at, so the map is what a dev button must not cost.");
  ("It ships rather than being kept to localhost, for the same reason the routes do: the");
  ("game is played and tested on a phone against the deployed site, where there is no");
  ("localhost. A player who taps it gets a list of dev screens and a way back, which is a");
  ("smaller wrong than the tester having no way in on the only device that matters.");
  let index = app_shared_g_dev_index_hash_name();
  let href = "#index";
  function open() {
    html_hash_name_reload(index);
  }
  app_g_dev_pill("🛠", href, open, "0.5rem");
}
