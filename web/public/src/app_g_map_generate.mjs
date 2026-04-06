import { app_g_map_generate_waters } from "../../../karate_code/public/src/app_g_map_generate_waters.mjs";
import { list_random_item_count_nested } from "../../../love/public/src/list_random_item_count_nested.mjs";
import { g_tiles_grasses_choices_weighted } from "../../../love/public/src/g_tiles_grasses_choices_weighted.mjs";
import { g_coordinates } from "../../../love/public/src/g_coordinates.mjs";
export function app_g_map_generate() {
  let tiles_choices = g_tiles_grasses_choices_weighted();
  let row_count = 15;
  let column_count = row_count;
  let rows = list_random_item_count_nested(
    tiles_choices,
    row_count,
    column_count,
  );
  let coordinates = g_coordinates(rows);
  app_g_map_generate_waters(coordinates);
  return rows;
}
