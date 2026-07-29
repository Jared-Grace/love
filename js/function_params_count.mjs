import { arguments_assert } from "./arguments_assert.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { js_function_declaration_params_get } from "./js_function_declaration_params_get.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
export async function function_params_count(f_name) {
  arguments_assert(arguments, 1);
  ("How many things a function declares it takes.");
  ("A plain number rather than the names, because no parameter here is optional,");
  ("defaulted, or variadic - so the count alone settles whether a call agrees with");
  ("the thing it is calling, and asking for the names to count them is the longer");
  ("way round to the same answer.");
  let parsed = await function_parse_declaration(f_name);
  let declaration = property_get(parsed, "declaration");
  let params = js_function_declaration_params_get(declaration);
  let count = list_size(params);
  return count;
}
