import { function_name_to_parts_includes } from "../../../love/public/src/function_name_to_parts_includes.mjs";
import { functions_rename_generic } from "../../../love/public/src/functions_rename_generic.mjs";
export async function functions_rename_part(from, to) {
  function_name_to_parts_includes;
  let r = await functions_rename_generic(
    function_name_to_parts_includes,
    name_change,
  );
}
