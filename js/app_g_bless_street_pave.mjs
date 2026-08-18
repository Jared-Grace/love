import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { list_set_nested_y_x } from "./list_set_nested_y_x.mjs";
export function app_g_bless_street_pave(rows, street) {
  arguments_assert(arguments, 2);
  ("Lays a street's tiles into the ground, so the place the game names is a place the player");
  ("can see.");
  ("A rung of the ladder is a place, and a place the world does not show is a rule the");
  ("player is asked to take on trust. Once the street is paved, being told the whole street");
  ("is in sight is something they can check with their eyes.");
  ("Paving over water is deliberate rather than tolerated: path is land, so a street that");
  ("crosses the shore becomes ground you can walk, and the rung stays reachable wherever the");
  ("player happened to be set down.");
  ("It never runs off the edge of the rows, because the world is generated with a ring of");
  ("water wider than this street is long and the player is only ever set down inside it.");
  ("The rows are changed in place, so ask for the coordinates again afterwards - a list of");
  ("tiles worked out before this ran still calls the paved squares water.");
  function tile_pave(tile) {
    list_set_nested_y_x(rows, tile, "construction_path");
  }
  each(street, tile_pave);
}
