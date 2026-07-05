import { each_nested_args } from "../../../love/public/src/each_nested_args.mjs";
import { range_1 } from "../../../love/public/src/range_1.mjs";
export function each_nested_args_range_1(max, lambda$left$right) {
  let lefts = range_1(max);
  let rights = lefts;
  function lambda(left, right) {
    lambda$left$right(left, right);
  }
  each_nested_args(lefts, rights, lambda);
}
