import { function_name_to_part_replace_last_multiple } from "../../../love/public/src/function_name_to_part_replace_last_multiple.mjs";
export function function_name_to_part_replace_last(f_name_old, replacement) {
  let count = 1;
  let f_name_new = function_name_to_part_replace_last_multiple(
    f_name_old,
    count,
    replacement,
  );
  return f_name_new;
}
