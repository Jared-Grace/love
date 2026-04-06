import { each_range } from "../../../love/public/src/each_range.mjs";
export function invoke_count_arg(fn, arg, count) {
  function lambda(i) {
    fn(arg);
  }
  each_range(count, lambda);
}
