import { function_replace_rename_multiple_generic } from "../../../love/public/src/function_replace_rename_multiple_generic.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
export async function function_replace_rename_multiple(from, to) {
  let f_names = await functions_names();
  await function_replace_rename_multiple_generic(f_names, from, to);
}
