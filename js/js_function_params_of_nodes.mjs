import { arguments_assert } from "./arguments_assert.mjs";
import { list_map_concat_multiple } from "./list_map_concat_multiple.mjs";
import { js_function_declaration_params_names } from "./js_function_declaration_params_names.mjs";
export function js_function_params_of_nodes(nodes) {
  arguments_assert(arguments, 1);
  ("Every parameter name written on pieces of parsed code already gathered - so a name handed to a nested function is never mistaken for one nothing binds.");
  ("The reading itself, kept apart from the gathering, so that a caller who has walked the tree once for several readings may hand it what it walked rather than sending it off to walk again.");
  let names = list_map_concat_multiple(
    nodes,
    js_function_declaration_params_names,
  );
  return names;
}
