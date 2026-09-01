import { arguments_assert } from "./arguments_assert.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_declaration_params_get } from "./js_function_declaration_params_get.mjs";
import { list_size } from "./list_size.mjs";
export async function function_parameters_declaration(f_name) {
  arguments_assert(arguments, 1);
  ("$plain f_name");
  ("the name of one function in this repo to look up. It names a function and nothing that runs.");
  ("The line a named function is declared on, the row of parameters standing in it, and how many of them there are - the three things every reading of a function's row starts by working out.");
  ("IT READS THE DECLARATION RATHER THAN THE ARITY ASSERT, because the assert is a copy that a transform has to be told to repair, and a copy that has drifted answers the old question. The declaration is the thing callers are actually checked against.");
  ("THE ROW IS DELIBERATELY ALL IT HANDS BACK, and the plain names of the parameters are not worked out here even though two of the three readings above want them. That reading costs a walk of its own and the counting reading asks this question fourteen thousand times in one sweep, so putting it here would charge every one of those for something only the two rewriting moves use.");
  let parsed = await function_parse_declaration(f_name);
  let declaration = property_get(parsed, "declaration");
  let params = js_function_declaration_params_get(declaration);
  let size = list_size(params);
  let r = {
    declaration,
    params,
    size,
  };
  return r;
}
