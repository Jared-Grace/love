import { js_node_is } from "./js_node_is.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function js_function_expression_own_names(node) {
  "a function expression may carry a name, and that name is readable in exactly one place: inside the function itself, so it can call itself. So it is a binding of the function's own scope. A function DECLARATION also carries a name, but that one is readable by everything around it, so it belongs to the enclosing scope and is not answered here - which is why the type is checked rather than just the name.";
  let expression_is = js_node_type_is(node, "FunctionExpression");
  if (not(expression_is)) {
    return [];
  }
  let id = property_get(node, "id");
  let named = js_node_is(id);
  if (not(named)) {
    return [];
  }
  let name = property_get(id, "name");
  let names = [name];
  return names;
}
