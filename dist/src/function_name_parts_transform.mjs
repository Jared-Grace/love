import { function_name_combine_multiple } from "../../../love/public/src/function_name_combine_multiple.mjs";
import { function_name_to_parts } from "../../../love/public/src/function_name_to_parts.mjs";
export function function_name_parts_transform(f_name_before, lambda$parts) {
  let parts = function_name_to_parts(f_name_before);
  lambda$parts(parts);
  let f_name_after = function_name_combine_multiple(parts);
  return f_name_after;
}
