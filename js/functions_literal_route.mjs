import { arguments_assert } from "./arguments_assert.mjs";
import { functions_literal_route_generic } from "./functions_literal_route_generic.mjs";
import { function_literal_route } from "./function_literal_route.mjs";
export async function functions_literal_route(f_names_comma, getter_f_name) {
  arguments_assert(arguments, 2);
  ("Points several files' spellings of one word at the getter holding it, naming");
  ("the files as one comma-joined word. The naming of a field is left alone, which");
  ("is the sibling command's half.");
  let outputs = await functions_literal_route_generic(
    f_names_comma,
    getter_f_name,
    function_literal_route,
  );
  return outputs;
}
