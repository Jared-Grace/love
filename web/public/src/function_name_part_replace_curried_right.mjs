import { function_name_part_replace } from "../../../love/public/src/function_name_part_replace.mjs";
export function function_name_part_replace_curried_right(to) {
  let r = function function_name_part_replace_curried_right_result(
    f_name,
    from,
  ) {
    let mapped = function_name_part_replace(f_name, from, to);
    return mapped;
  };
  return r;
}
