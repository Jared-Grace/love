import { function_name_to_parts_includes } from "../../../love/public/src/function_name_to_parts_includes.mjs";
export function function_name_to_parts_includes_curried_right(part) {
  return function function_name_to_parts_includes_curried_right_result(f_name) {
    return function_name_to_parts_includes(f_name, part);
  };
}
