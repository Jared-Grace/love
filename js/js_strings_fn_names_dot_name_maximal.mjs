import { functions_names } from "./functions_names.mjs";
import { js_strings_dot_name_skip_nodes } from "./js_strings_dot_name_skip_nodes.mjs";
import { js_string_maximal_fn_name_is } from "./js_string_maximal_fn_name_is.mjs";
import { not } from "./not.mjs";
import { js_code_dot } from "./js_code_dot.mjs";
import { js_parse_expression_replace } from "./js_parse_expression_replace.mjs";
import { js_strings_replace_generic } from "./js_strings_replace_generic.mjs";
export async function js_strings_fn_names_dot_name_maximal(ast) {
  let fn_names = await functions_names();
  let skip = js_strings_dot_name_skip_nodes(ast);
  function replace_try(value, node) {
    let ok = js_string_maximal_fn_name_is(value, fn_names);
    if (not(ok)) {
      return false;
    }
    let name = "name";
    let code = js_code_dot(value, name);
    js_parse_expression_replace(code, node);
    return true;
  }
  await js_strings_replace_generic(ast, skip, replace_try);
}
