import { function_name_combine_multiple } from "../../../love/public/src/function_name_combine_multiple.mjs";
import { function_name_to_parts } from "../../../love/public/src/function_name_to_parts.mjs";
export function function_name_parts_transform(before, fn) {
  let parts = function_name_to_parts(before);
  fn(parts);
  let transformed = function_name_combine_multiple(parts);
  return transformed;
}
