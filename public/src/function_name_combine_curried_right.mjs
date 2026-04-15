import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
export function function_name_combine_curried_right(right) {
  return function function_name_combine_curried_right_result(left) {
    return function_name_combine(left, right);
  };
}
