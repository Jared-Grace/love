import { function_parse_declaration_js_unparse } from "./function_parse_declaration_js_unparse.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_params_new } from "./function_params_new.mjs";
export async function function_param_new(f_name, param_name, default_value) {
  arguments_assert(arguments, 3);
  ("Hands back the function as it now stands, the same as every other command");
  ("that changes one. The parameter list is exactly what the caller wanted to");
  ("see, and until this the only way to see it was a second command.");
  await function_params_new(f_name, param_name, default_value);
  let output = await function_parse_declaration_js_unparse(f_name);
  return output;
}
