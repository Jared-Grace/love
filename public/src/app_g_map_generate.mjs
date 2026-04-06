import { list_remove_add } from "../../../karate_code/public/src/list_remove_add.mjs";
import { list_set_nested_y_x } from "../../../karate_code/public/src/list_set_nested_y_x.mjs";
import { app_g_map_generate_waters_next } from "../../../love/public/src/app_g_map_generate_waters_next.mjs";
import { list_random_item_count_nested } from "../../../love/public/src/list_random_item_count_nested.mjs";
import { g_tiles_grasses_choices_weighted } from "../../../love/public/src/g_tiles_grasses_choices_weighted.mjs";
import { app_a_water } from "../../../love/public/src/app_a_water.mjs";
import { floor } from "../../../love/public/src/floor.mjs";
import { g_coordinates } from "../../../love/public/src/g_coordinates.mjs";
import { each_range } from "../../../love/public/src/each_range.mjs";
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
  let total = row_count * column_count;
  let water_count = floor(total * 0.3);
  let waters = [];
  function lambda2(i4) {
    let r = app_g_map_generate_waters_next(waters, coordinates);
    let value = app_a_water();
    list_set_nested_y_x(r, value);
    list_remove_add(coordinates, r, waters);
  }
  each_range(water_count, lambda2);
  return rows;
}
