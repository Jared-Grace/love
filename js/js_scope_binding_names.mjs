import { js_function_declaration_params_names } from "./js_function_declaration_params_names.mjs";
import { js_node_types_is } from "./js_node_types_is.mjs";
import { js_statements_declared_names_direct } from "./js_statements_declared_names_direct.mjs";
import { property_get } from "./property_get.mjs";
export function js_scope_binding_names(node) {
  "the names this one scope binds: a function binds its parameters, a block or module binds what its own statements declare. A function's own name belongs to the scope around it, not to this one, and so does everything a deeper scope declares.";
  let types = [
    "FunctionDeclaration",
    "FunctionExpression",
    "ArrowFunctionExpression",
  ];
  let function_is = js_node_types_is(node, types);
  if (function_is) {
    let params = js_function_declaration_params_names(node);
    return params;
  }
  let statements = property_get(node, "body");
  let names = js_statements_declared_names_direct(statements);
  return names;
}
