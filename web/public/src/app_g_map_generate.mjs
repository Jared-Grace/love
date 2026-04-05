import { g_distance_1_any_random } from "../../../karate_code/public/src/g_distance_1_any_random.mjs";
import { list_random_item_count_nested } from "../../../karate_code/public/src/list_random_item_count_nested.mjs";
import { g_tiles_grasses_choices_weighted } from "../../../karate_code/public/src/g_tiles_grasses_choices_weighted.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_a_water } from "../../../love/public/src/app_a_water.mjs";
import { list_empty_is } from "../../../love/public/src/list_empty_is.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { floor } from "../../../love/public/src/floor.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { g_coordinates } from "../../../love/public/src/g_coordinates.mjs";
import { list_set } from "../../../love/public/src/list_set.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { list_random_item } from "../../../love/public/src/list_random_item.mjs";
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
    let r = null;
    let e = list_empty_is(waters);
    if (e) {
      r = list_random_item(coordinates);
    } else {
      r = g_distance_1_any_random(waters, coordinates, r);
    }
    let x = property_get(r, "x");
    let y = property_get(r, "y");
    let water_row = list_get(rows, y);
    let value = app_a_water();
    list_set(water_row, x, value);
    list_remove(coordinates, r);
    list_add(waters, r);
  }
  each_range(water_count, lambda2);
  return rows;
}
