import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_declaration_params_named_assert } from "./js_function_declaration_params_named_assert.mjs";
import { function_parse_declaration_js_unparse } from "./function_parse_declaration_js_unparse.mjs";
import { text_is_assert_json } from "./text_is_assert_json.mjs";
import { text_split_comma_dot } from "./text_split_comma_dot.mjs";
import { function_param_delete_curried } from "./function_param_delete_curried.mjs";
import { each_async } from "./each_async.mjs";
export async function function_params_delete(f_name, param_names_comma) {
  text_is_assert_json(param_names_comma, {
    hint: "the comma-separated parameter names should be text — did an empty or non-text value arrive?",
    f_name,
    param_names_comma,
  });
  let param_names = text_split_comma_dot(param_names_comma);
  ("Every name is checked against the declaration before any of them is removed, because removing them is done one at a time and each one writes the declaration and every call site as it goes. The same question asked inside the loop instead would let a wrong second name stop the run with the first name already gone from every file, under a command that reported a refusal.");
  let parsed = await function_parse_declaration(f_name);
  let declaration = property_get(parsed, "declaration");
  js_function_declaration_params_named_assert(declaration, f_name, param_names);
  let c = await function_param_delete_curried(f_name);
  await each_async(param_names, c);
  ("Hands back the function as it now stands, the same as the twin that adds a");
  ("parameter. Which ones are left is the whole question a caller has after");
  ("removing some, and answering nothing left them to ask it separately.");
  let output = await function_parse_declaration_js_unparse(f_name);
  return output;
}
