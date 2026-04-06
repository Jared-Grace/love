import { list_size_nested } from "../../../love/public/src/list_size_nested.mjs";
import { g_coordinates } from "../../../love/public/src/g_coordinates.mjs";
import { each_range } from "../../../love/public/src/each_range.mjs";
import { list_remove_add } from "../../../love/public/src/list_remove_add.mjs";
import { list_set_nested_y_x } from "../../../love/public/src/list_set_nested_y_x.mjs";
import { app_a_water } from "../../../love/public/src/app_a_water.mjs";
import { app_g_map_generate_waters_next } from "../../../love/public/src/app_g_map_generate_waters_next.mjs";
import { floor } from "../../../love/public/src/floor.mjs";
export function app_g_map_generate_waters(rows) {
  let coordinates = g_coordinates(rows);
  let total = list_size_nested(rows);
  let water_count = floor(total * 0.3);
  let waters = [];
  function lambda2(i) {
    let r = app_g_map_generate_waters_next(waters, coordinates);
    let w = app_a_water();
    list_set_nested_y_x(rows, r, w);
    list_remove_add(coordinates, waters, r);
  }
  each_range(water_count, lambda2);
}
