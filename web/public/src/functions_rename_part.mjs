import { function_name_to_parts_includes_curried_right } from "../../../love/public/src/function_name_to_parts_includes_curried_right.mjs";
import { functions_rename_generic } from "../../../love/public/src/functions_rename_generic.mjs";
export async function functions_rename_part(from, to) {
  let r2 = function_name_to_parts_includes_curried_right(from);
  let r = await functions_rename_generic(r2, name_change);
}
