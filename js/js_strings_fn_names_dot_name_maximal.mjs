import { functions_names } from "./functions_names.mjs";
import { js_strings_generic } from "./js_strings_generic.mjs";
import { js_strings_dot_name_skip_nodes } from "./js_strings_dot_name_skip_nodes.mjs";
import { list_includes } from "./list_includes.mjs";
import { property_get } from "./property_get.mjs";
import { js_string_maximal_fn_name_is } from "./js_string_maximal_fn_name_is.mjs";
import { not } from "./not.mjs";
import { js_code_dot } from "./js_code_dot.mjs";
import { js_parse_expression_replace } from "./js_parse_expression_replace.mjs";
import { each } from "./each.mjs";
import { js_imports_missing_add_all } from "./js_imports_missing_add_all.mjs";
export async function js_strings_fn_names_dot_name_maximal(ast) {
  let fn_names = await functions_names();
  let results = js_strings_generic(ast);
  let skip = js_strings_dot_name_skip_nodes(ast);
  let replaced = false;
  function lambda(result) {
    let node = property_get(result, "node");
    let skipped = list_includes(skip, node);
    if (skipped) {
      return;
    }
    let value = property_get(result, "value");
    let ok = js_string_maximal_fn_name_is(value, fn_names);
    if (not(ok)) {
      return;
    }
    let name = "name";
    let code = js_code_dot(value, name);
    js_parse_expression_replace(code, node);
    replaced = true;
  }
  each(results, lambda);
  if (replaced) {
    await js_imports_missing_add_all(ast);
  }
}
