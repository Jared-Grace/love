import { list_adder } from "./list_adder.mjs";
import { each_nested_args_range_1 } from "./each_nested_args_range_1.mjs";
export function each_nested_args_range_1_list_adder(max, lambda$left$right$la) {
  function lambda(la) {
    each_nested_args_range_1(max, lambda$left$right);
    function lambda$left$right(left, right) {
      lambda$left$right$la(left, right, la);
    }
  }
  let list = list_adder(lambda);
  return list;
}
