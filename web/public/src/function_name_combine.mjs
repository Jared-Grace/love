import { function_name_combine_multiple } from "../../../love/public/src/function_name_combine_multiple.mjs";
export function function_name_combine(left, right) {
  let combined = function_name_combine_multiple([left, right]);
  return combined;
}
