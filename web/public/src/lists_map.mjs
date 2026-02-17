import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { each_multiple } from "./each_multiple.mjs";
export function lists_map(lists, mapper) {
  function lambda_list_adder(la) {
    function lambda_each(elements) {
      const m = mapper(a, b);
      la(m);
    }
    each_multiple(lists, lambda_each);
  }
  let mapped = list_adder(lambda_list_adder);
  return mapped;
}
