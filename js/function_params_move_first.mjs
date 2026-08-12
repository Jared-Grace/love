import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_declaration_params_named_assert } from "./js_function_declaration_params_named_assert.mjs";
import { each_async } from "./each_async.mjs";
import { function_param_move_first_curried } from "./function_param_move_first_curried.mjs";
export async function function_params_move_first(f_name, param_names) {
  "Moves several of one function's parameters to the front, and every call along with them.";
  "Every name is checked against the declaration before any of them moves. Moving them is done one at a time and each one writes the declaration and every call site as it goes, so a name that is wrong partway down the list would stop the run with the earlier ones already moved everywhere - a reordering half applied, under a command that reported a refusal. The verb that deletes a list of parameters carried the same shape and the same defect, measured on a folder it left holding a call nobody declared.";
  let parsed = await function_parse_declaration(f_name);
  let declaration = property_get(parsed, "declaration");
  js_function_declaration_params_named_assert(declaration, f_name, param_names);
  let r = await function_param_move_first_curried(f_name);
  await each_async(param_names, r);
}
