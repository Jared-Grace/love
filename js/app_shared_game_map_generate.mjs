import { arguments_assert } from "./arguments_assert.mjs";
import { g_tiles_grasses_choices_weighted } from "./g_tiles_grasses_choices_weighted.mjs";
import { list_random_item_count_nested } from "./list_random_item_count_nested.mjs";
import { app_shared_game_map_generate_waters } from "./app_shared_game_map_generate_waters.mjs";
import { app_shared_game_map_pad } from "./app_shared_game_map_pad.mjs";
export function app_shared_game_map_generate(row_count) {
  arguments_assert(arguments, 1);
  ("The square of ground a game is played on, given as rows of tiles with a ring of water");
  ("around the outside.");
  ("How many rows is asked for rather than fixed here, because the two games that call this");
  ("want different amounts of room and neither one is the right answer for the other. The");
  ("gospel game wants a walk between people who are scattered over it. The prayer game has");
  ("to fit a street of buildings across it, so its width is decided by how wide a building");
  ("is and how many stand in a row - a number that changes whenever the picture of a");
  ("building changes, and that would otherwise be silently capped by a size written here.");
  let tiles_choices = g_tiles_grasses_choices_weighted();
  let column_count = row_count;
  let rows = list_random_item_count_nested(
    tiles_choices,
    row_count,
    column_count,
  );
  app_shared_game_map_generate_waters(rows);
  let padded = app_shared_game_map_pad(rows);
  return padded;
}
