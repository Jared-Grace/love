import { function_name_to_parts_includes_curried_right } from "../../../love/public/src/function_name_to_parts_includes_curried_right.mjs";
import { function_name_to_parts_includes } from "../../../love/public/src/function_name_to_parts_includes.mjs";
import { functions_rename_generic } from "../../../love/public/src/functions_rename_generic.mjs";
export async function functions_rename_part(from, to) {
  let includes = function_name_to_parts_includes(f_name, part);
  let r2 = function_name_to_parts_includes_curried_right(part2);
  let r = await functions_rename_generic(
    function_name_to_parts_includes,
    name_change,
  );
}
