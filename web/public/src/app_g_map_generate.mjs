import { log } from "../../../love/public/src/log.mjs";
import { g_distance } from "../../../love/public/src/g_distance.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { g_coordinates } from "../../../love/public/src/g_coordinates.mjs";
import { list_set } from "../../../love/public/src/list_set.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { list_random_item } from "../../../love/public/src/list_random_item.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { each_index } from "../../../love/public/src/each_index.mjs";
import { each_range } from "../../../love/public/src/each_range.mjs";
import { list_take } from "../../../love/public/src/list_take.mjs";
import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
import { g_tiles_grasses } from "../../../love/public/src/g_tiles_grasses.mjs";
export function app_g_map_generate() {
  let grasses = g_tiles_grasses();
  list_shuffle(grasses);
  ("choose three different types of grass for visual variety");
  let taken = list_take(grasses, 3);
  function lambda5(la) {
    function lambda3(g, index) {
      function lambda4(i3) {
        la(g);
      }
      each_range(index + 1, lambda4);
    }
    each_index(taken, lambda3);
  }
  const w = "water";
  let tiles = list_adder(lambda5);
  let row_count = 15;
  let column_count = row_count;
  function lambda10(la2) {
    function lambda6(i) {
      function lambda11(la3) {
        function lambda9(i2) {
          let r = list_random_item(tiles);
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
  function lambda2(i4) {}
  each_range(count, lambda2);
  let r = list_random_item(coordinates);
  let { y, x } = r;
  let water_row = list_get(rows, y);
  list_set(water_row, x, w);
  list_remove(coordinates, r);
  function lambda(item) {
    let distance = g_distance(r, item);
    let v = distance === 1;
    return v;
  }
  let filtered = list_filter(coordinates, lambda);
  log({
    filtered,
  });
  return rows;
}
