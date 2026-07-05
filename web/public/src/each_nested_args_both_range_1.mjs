import { each_nested_args_both } from "../../../love/public/src/each_nested_args_both.mjs";
import { range_1 } from "../../../love/public/src/range_1.mjs";
import { newFunction } from "../../../love/public/src/newFunction.mjs";
export function each_nested_args_both_range_1(max, newFunction) {
  let lefts = range_1(max);
  let rights = range_1(max);
  function lambda(left, right) {
    newFunction(left, right);
  }
  each_nested_args_both(lefts, rights, lambda);
}
