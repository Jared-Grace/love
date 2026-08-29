import { arguments_assert } from "./arguments_assert.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_declaration_params_get } from "./js_function_declaration_params_get.mjs";
import { list_size } from "./list_size.mjs";
export async function function_parameters_count(f_name) {
  arguments_assert(arguments, 1);
  ("$plain f_name");
  ("the name of one function in this repo to look up. It names a function and nothing that runs.");
  ("How many things a caller of this function has to line up in the right order.");
  ("A RECORD COUNTS AS ONE, which is the whole reason this is worth measuring rather than counting the names in the signature. A function written to take a record unpacks fifteen names and still asks its caller for one thing, and a caller writing those names out is writing each of them beside itself and so cannot put two of them the wrong way round. What hurts is the row, not the names in it.");
  ("IT READS THE DECLARATION RATHER THAN THE ARITY ASSERT, because the assert is a copy that a transform has to be told to repair, and a copy that has drifted answers the old question. The declaration is the thing callers are actually checked against.");
  let parsed = await function_parse_declaration(f_name);
  let declaration = property_get(parsed, "declaration");
  let params = js_function_declaration_params_get(declaration);
  let count = list_size(params);
  return count;
}
