import { js_loop_declared_names } from "./js_loop_declared_names.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_catch_clause_names } from "./js_catch_clause_names.mjs";
import { js_function_expression_own_names } from "./js_function_expression_own_names.mjs";
import { list_concat } from "./list_concat.mjs";
import { js_function_declaration_params_names } from "./js_function_declaration_params_names.mjs";
import { js_node_types_is } from "./js_node_types_is.mjs";
import { js_statements_declared_names_direct } from "./js_statements_declared_names_direct.mjs";
import { property_get } from "./property_get.mjs";
export function js_scope_binding_names(node) {
  "the names this one scope binds: a function binds its parameters, a block or module binds what its own statements declare, a catch clause binds the error it names, a loop binds the counter or item its header declares. A declared function's own name belongs to the scope around it, not to this one, and so does everything a deeper scope declares.";
  let binds_caught = js_node_type_is(node, "CatchClause");
  if (binds_caught) {
    let caught = js_catch_clause_names(node);
    return caught;
  }
  let loop_types = js_types_loop_node();
  let binds_loop = js_node_types_is(node, loop_types);
  if (binds_loop) {
    let looped = js_loop_declared_names(node);
    return looped;
  }
  let types = [
    "FunctionDeclaration",
    "FunctionExpression",
    "ArrowFunctionExpression",
  ];
  let binds_params = js_node_types_is(node, types);
  if (binds_params) {
    let params = js_function_declaration_params_names(node);
    ("a function EXPRESSION also binds its own name, and inside itself only - that is the one place the name can be read, so it is this scope's binding and not the enclosing one's");
    let own = js_function_expression_own_names(node);
    let params_and_own = list_concat(params, own);
    return params_and_own;
  }
  let statements = property_get(node, "body");
  let names = js_statements_declared_names_direct(statements);
  return names;
}
