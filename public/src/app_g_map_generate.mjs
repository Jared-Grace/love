import { integer_random_1 } from "../../../love/public/src/integer_random_1.mjs";
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
  let water_start_y = integer_random_1(row_count) - 1;
  return rows;
}
