import { list_concat } from "./list_concat.mjs";
import { function_name_combine_multiple } from "./function_name_combine_multiple.mjs";
export function function_name_combine_multiple_concat(a, b) {
  let concated = list_concat(a, b);
  let combined = function_name_combine_multiple(concated);
  return combined;
}
