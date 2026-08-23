import { arguments_assert } from "./arguments_assert.mjs";
import { property_set } from "./property_set.mjs";
import { app_g_bless_dev_crowd } from "./app_g_bless_dev_crowd.mjs";

export function app_g_bless_dev_routes(world) {
  arguments_assert(arguments, 1);
  ("Every dev screen the praying game has, keyed by the word that asks for it after the");
  ("hash mark.");
  ("A registry rather than a run of ifs, and that is what makes the directory possible: the");
  ("screen that LISTS the routes reads this same object, so a route cannot be reachable and");
  ("unlisted, or listed and reachable by nothing. Written as two lists they would agree the");
  ("day they were written and never be checked again.");
  ("The world is handed in rather than reached for, because a dev screen here reports on the");
  ("world the player is standing in and there is no other way to get it - this game keeps its");
  ("world in memory and never writes it down, so a screen that made its own would be");
  ("truthfully describing a street nobody is looking at.");
  ("Every route ships rather than being held back to localhost. The game is tested on a");
  ("phone against the deployed site, and a phone has no localhost to develop from, so a");
  ("localhost-only route is a route that does not exist where the testing happens.");
  let routes = {};
  function crowd() {
    app_g_bless_dev_crowd(world);
  }
  property_set(routes, "crowd", crowd);
  return routes;
}
