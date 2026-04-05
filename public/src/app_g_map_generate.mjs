import { g_tiles_grasses_choices_weighted } from "../../../karate_code/public/src/g_tiles_grasses_choices_weighted.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_a_water } from "../../../love/public/src/app_a_water.mjs";
import { list_empty_is } from "../../../love/public/src/list_empty_is.mjs";
import { list_any } from "../../../love/public/src/list_any.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { floor } from "../../../love/public/src/floor.mjs";
import { g_distance } from "../../../love/public/src/g_distance.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { g_coordinates } from "../../../love/public/src/g_coordinates.mjs";
import { list_set } from "../../../love/public/src/list_set.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { list_random_item } from "../../../love/public/src/list_random_item.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { each_range } from "../../../love/public/src/each_range.mjs";
export function app_g_map_generate() {
  let tiles_choices = g_tiles_grasses_choices_weighted();
  let row_count = 15;
  let column_count = row_count;
  function lambda10(la2) {
    function lambda6(i) {
      function lambda11(la3) {
        function lambda9(i2) {
          let r = list_random_item(tiles_choices);
          la3(r);
        }
        each_range(column_count, lambda9);
      }
      let list2 = list_adder(lambda11);
      la2(list2);
    }
    each_range(row_count, lambda6);
  }
  let rows = list_adder(lambda10);
  let coordinates = g_coordinates(rows);
  let count = row_count * column_count;
  let water_count = floor(count * 0.3);
  let waters = [];
  function lambda2(i4) {
    let r = null;
    let e = list_empty_is(waters);
    if (e) {
      r = list_random_item(coordinates);
    } else {
      function lambda7(c) {
        function lambda(w) {
          let distance = g_distance(c, w);
          let v = distance === 1;
          return v;
        }
        let any = list_any(waters, lambda);
        return any;
      }
      let filtered2 = list_filter(coordinates, lambda7);
      r = list_random_item(filtered2);
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
