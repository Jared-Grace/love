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
  let c = await function_param_delete_curried(f_name);
  await each_async(param_names, c);
  ("Hands back the function as it now stands, the same as the twin that adds a");
  ("parameter. Which ones are left is the whole question a caller has after");
  ("removing some, and answering nothing left them to ask it separately.");
  let output = await function_parse_declaration_js_unparse(f_name);
  return output;
}
