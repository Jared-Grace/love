import { app_shared_dev_shown_is } from "./app_shared_dev_shown_is.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { html_hash_name_get } from "./html_hash_name_get.mjs";
import { app_shared_g_dev_index_hash_name } from "./app_shared_g_dev_index_hash_name.mjs";
import { app_g_bless_dev_routes } from "./app_g_bless_dev_routes.mjs";
import { app_g_bless_dev_index } from "./app_g_bless_dev_index.mjs";
import { app_g_bless_dev_links } from "./app_g_bless_dev_links.mjs";
export async function app_g_bless_dev_if(world) {
  arguments_assert(arguments, 1);
  ("If the address after the hash names a dev screen, draw it over the street; if it names");
  ("the directory, draw that; anything else, including no hash at all, does nothing.");
  ("Doing NOTHING is the important half. Ordinary play arrives here with a hash that names");
  ("no screen - or with none - and has to walk straight through untouched, so a word this");
  ("does not recognise is deliberately not an error. The street opening arrives that way");
  ("too: it is read where the door is put up rather than here, because it changes how the");
  ("game STARTS instead of drawing anything over it.");
  ("Asked after the world exists, because every screen here reports on the world. Asked");
  ("before it, they would each have to build one, and a dev screen describing a street the");
  ("player is not standing in is worse than no dev screen - it would be believed.");
  ("The back and refresh pills go up only once a screen has actually been drawn, so a street");
  ("being played normally never grows a pill it has no use for.");
  ("It answers whether it drew anything, and the caller owes that answer one thing: not");
  ("putting the door prayer up over the top. The door is the first thing on the screen and");
  ("it cannot be dismissed until it has been read, so a dev screen underneath it is a dev");
  ("screen nobody can see - and the prayer would be said, carelessly, forty times an");
  ("afternoon by somebody who only wanted to read a number. A screen was drawn or it was");
  ("not; the caller is the only one that can act on it.");
  ("Nothing here draws at all off this network, the same answer the pill that opens it asks,");
  ("so a hash typed by hand cannot reach a screen the way in was taken away from. It is");
  ("asked first because it is the cheapest of the refusals and the only one that is about");
  ("who is reading rather than about what they typed.");
  let shown = app_shared_dev_shown_is();
  if (not(shown)) {
    return false;
  }
  let name = html_hash_name_get();
  let index = app_shared_g_dev_index_hash_name();
  let asked_index = equal(name, index);
  if (asked_index) {
    app_g_bless_dev_index(world);
    return true;
  }
  let routes = app_g_bless_dev_routes(world);
  let known = property_exists(routes, name);
  if (known) {
    let route = property_get(routes, name);
    await route();
    app_g_bless_dev_links();
    return true;
  }
  return false;
}
