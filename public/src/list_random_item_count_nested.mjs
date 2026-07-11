import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { each_range } from "../../../love/public/src/each_range.mjs";
import { list_random_item_count } from "../../../love/public/src/list_random_item_count.mjs";
export function list_random_item_count_nested(
  tiles_choices,
  row_count,
  column_count,
) {
  function lambda(la) {
    function lambda6(i) {
      let list = list_random_item_count(tiles_choices, column_count);
      la(list);
    }
    each_range(row_count, lambda6);
  }
  let rows = list_adder(lambda);
  return rows;
}
