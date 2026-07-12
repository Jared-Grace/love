import { log } from "./log.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
export function function_name_combine_curried_right(right) {
  let r = function function_name_combine_curried_right_result(left) {
    log(function_name_combine_curried_right.name, {
      left,
      right,
    });
    let combined = function_name_combine(left, right);
    return combined;
  };
  return r;
}
