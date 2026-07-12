import { list_size_nested } from "./list_size_nested.mjs";
import { g_coordinates } from "./g_coordinates.mjs";
import { each_range } from "./each_range.mjs";
import { list_remove_add } from "./list_remove_add.mjs";
import { list_set_nested_y_x } from "./list_set_nested_y_x.mjs";
import { app_a_water } from "./app_a_water.mjs";
import { app_g_map_generate_waters_next } from "./app_g_map_generate_waters_next.mjs";
import { floor } from "./floor.mjs";
import { multiply } from "./multiply.mjs";
export function app_g_map_generate_waters(rows) {
  let coordinates = g_coordinates(rows);
  let total = list_size_nested(rows);
  let water_count = floor(multiply(total, 0.3));
  let waters = [];
  function lambda(i) {
    let r = app_g_map_generate_waters_next(waters, coordinates);
    let w = app_a_water();
    list_set_nested_y_x(rows, r, w);
    list_remove_add(coordinates, waters, r);
  }
  each_range(water_count, lambda);
}
