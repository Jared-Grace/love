import { list_map_squash } from "./list_map_squash.mjs";
import { js_function_declaration_params_get } from "./js_function_declaration_params_get.mjs";
import { js_function_declaration_params_names_node } from "./js_function_declaration_params_names_node.mjs";
export function js_function_declaration_params_names(declaration) {
  "every name this function's parameter list binds, an unpacked one counting as each of the names it unpacks to";
  "the reading that only ever took a plain name stood here behind a false test, left";
  "over from the day the unpacking one replaced it. A branch nothing can enter reads";
  "as a choice still being weighed, and this one was not.";
  let params = js_function_declaration_params_get(declaration);
  let params_names = list_map_squash(
    params,
    js_function_declaration_params_names_node,
  );
  return params_names;
}
