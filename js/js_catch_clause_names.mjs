import { js_function_declaration_params_names_node } from "./js_function_declaration_params_names_node.mjs";
import { js_node_is } from "./js_node_is.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function js_catch_clause_names(node) {
  "the names a catch clause binds. It is written like a one-parameter function and behaves like one, so a name it binds is only readable inside it and hides an outer name of the same spelling for the length of the clause. A bare catch with no parenthesis binds nothing, hence the empty answer.";
  let param = property_get(node, "param");
  let bound = js_node_is(param);
  if (not(bound)) {
    let r = [];
    return r;
  }
  let names = js_function_declaration_params_names_node(param);
  return names;
}
