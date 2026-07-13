import { functions_names } from "./functions_names.mjs";
import { js_strings_add_reference_to_fn_names_generic } from "./js_strings_add_reference_to_fn_names_generic.mjs";
export async function js_strings_add_reference_to_fn_names(ast) {
  let fn_names = await functions_names();
  await js_strings_add_reference_to_fn_names_generic(ast, fn_names);
}
