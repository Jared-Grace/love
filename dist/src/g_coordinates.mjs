import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { each_index } from "../../../love/public/src/each_index.mjs";
export function g_coordinates(rows) {
  function lambda15(la4) {
    function lambda13(columns, y) {
      function lambda14(item2, x) {
        la4({
          x,
          y,
        });
      }
      each_index(columns, lambda14);
    }
    each_index(rows, lambda13);
  }
  let coordinates = list_adder(lambda15);
  return coordinates;
}
