import { each_nested_args } from "../../../love/public/src/each_nested_args.mjs";
import { range_ } from "../../../love/public/src/range_1.mjs";
export function each_nested_args_range_(max, lambda$left$right) {
  let lefts = range_(max);
  let rights = lefts;
  function lambda(left, right) {
    lambda$left$right(left, right);
  }
  each_nested_args(lefts, rights, lambda);
}
