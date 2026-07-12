import { function_name_part_last_delete_n } from "./function_name_part_last_delete_n.mjs";
export function function_name_part_last_delete_2(f_name_old) {
  let count = 2;
  let f_name_new = function_name_part_last_delete_n(f_name_old, count);
  return f_name_new;
}
