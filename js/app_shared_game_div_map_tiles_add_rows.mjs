import { arguments_assert } from "./arguments_assert.mjs";
import { each_index } from "./each_index.mjs";
import { app_shared_game_tile } from "./app_shared_game_tile.mjs";
export function app_shared_game_div_map_tiles_add_rows(div_map, rows) {
  arguments_assert(arguments, 2);
  ("Draws every tile of the rows handed in onto a map, each one carrying the coordinates it");
  ("sits at so a tap on it can say where it was.");
  ("Given the rows rather than reading them, for the same reason as the layout twin beside");
  ("it: a world held in memory has no save to be read out of, and drawing tiles never");
  ("needed to know where they came from.");
  function lambda2(columns, y) {
    function lambda(r, x) {
      app_shared_game_tile(div_map, r, x, y);
    }
    each_index(columns, lambda);
  }
  each_index(rows, lambda2);
}
