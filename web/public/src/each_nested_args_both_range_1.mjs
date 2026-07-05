import { each_nested_args_both } from "../../../love/public/src/each_nested_args_both.mjs";
import { range_1 } from "../../../love/public/src/range_1.mjs";
export function each_nested_args_both_range_1(max, lambda$left$right) {
  let lefts = range_1(max);
  let rights = range_1(max);
  function lambda(left, right) {
    lambda$left$right(left, right);
  }
  each_nested_args_both(lefts, rights, lambda);
}
