import { app_shared_dev_shown_is } from "./app_shared_dev_shown_is.mjs";
import { not } from "./not.mjs";
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
  ("It goes up only where the screens behind it run, for the same reason the routes do, and");
  ("that is this same network rather than this same machine. It used to ship, on the");
  ("reasoning that the game is tested on a phone and a phone has no localhost; a phone");
  ("reaching this machine by the name its own network gives it answers yes to the wider");
  ("question, so the tester keeps the only way in that mattered and a player who came to");
  ("pray is not handed a corner of somebody else's toolbox.");
  let shown = app_shared_dev_shown_is();
  if (not(shown)) {
    return;
  }
  let index = app_shared_g_dev_index_hash_name();
  let href = "#index";
  function open() {
    html_hash_name_reload(index);
  }
  app_g_dev_pill("🛠", href, open, "0.5rem");
}
