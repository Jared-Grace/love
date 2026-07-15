import { list_skip_1 } from "./list_skip_1.mjs";
import { list_get } from "./list_get.mjs";
import { list_adder } from "./list_adder.mjs";
import { each_index } from "./each_index.mjs";
export function g_path_steps(path) {
  let destinations = list_skip_1(path);
  function lambda(add) {
    function each(to, index) {
      let from = list_get(path, index);
      add({
        from,
        to,
      });
    }
    each_index(destinations, each);
  }
  let steps = list_adder(lambda);
  return steps;
}
