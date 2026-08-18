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
  ("Hand it a street that is inside the rows. A tile outside them is written to a place that");
  ("is not part of the ground, so nothing is drawn there and nothing says so - and the game");
  ("would go on to announce a whole street in sight with part of it never on the screen.");
  ("Keeping the street inside the world is the job of whoever decides where it goes, which");
  ("is the only place that knows how large the world is.");
  ("The rows are changed in place, so ask for the coordinates again afterwards - a list of");
  ("tiles worked out before this ran still calls the paved squares water.");
  function tile_pave(tile) {
    list_set_nested_y_x(rows, tile, "construction_path");
  }
  each(street, tile_pave);
}
