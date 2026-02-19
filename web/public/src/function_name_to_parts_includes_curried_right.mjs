import { function_name_to_parts_includes } from "../../../love/public/src/function_name_to_parts_includes.mjs";
export function function_name_to_parts_includes_curried_right(part) {
  let r = function function_name_to_parts_includes_curried_right_result(
    f_name,
  ) {
    let includes = function_name_to_parts_includes(f_name, part);
    return includes;
  };
  return r;
}
