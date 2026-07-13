import { functions_names } from "./functions_names.mjs";
import { list_filter } from "./list_filter.mjs";
import { text_includes } from "./text_includes.mjs";
import { js_strings_add_reference_to_fn_names_generic } from "./js_strings_add_reference_to_fn_names_generic.mjs";
export async function js_strings_add_reference_to_fn_names_if_underscore(ast) {
  let fn_names = await functions_names();
  function underscore_lambda(n) {
    let has = text_includes(n, "_");
    return has;
  }
  let underscore_fn_names = list_filter(fn_names, underscore_lambda);
  await js_strings_add_reference_to_fn_names_generic(ast, underscore_fn_names);
}
