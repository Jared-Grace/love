import { function_name_to_parts } from "../../../love/public/src/function_name_to_parts.mjs";
import { functions_rename_generic } from "../../../love/public/src/functions_rename_generic.mjs";
export async function functions_rename_part(from, to) {
  function lambda(f_name) {
    let parts = function_name_to_parts(f_name);
  }
  let r = await functions_rename_generic(lambda, name_change);
}
