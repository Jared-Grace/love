import { function_name_part_replace } from "../../../love/public/src/function_name_part_replace.mjs";
export function function_name_part_replace_curried_right_2(from, to) {
  return function function_name_part_replace_curried_right_2_result(f_name) {
    return function_name_part_replace(f_name, from, to);
  };
}
