import { js_node_is } from "./js_node_is.mjs";
import { js_node_types_is } from "./js_node_types_is.mjs";
import { not } from "./not.mjs";
export function js_scope_is(node) {
  "the node kinds that open a scope of their own: a function, which binds its parameters, a block, which binds the variables declared in it, a catch clause, which binds the error it names, a loop that declares its own counter or item, which binds that for the length of the loop and nowhere after, and the module top level. A name is only hidden by another when the two sit in scopes one inside the other, so these are the nodes a shadowing check walks.";
  let is_node = js_node_is(node);
  if (not(is_node)) {
    return false;
  }
  let types = [
    "FunctionDeclaration",
    "FunctionExpression",
    "ArrowFunctionExpression",
    "CatchClause",
    "ForStatement",
    "ForInStatement",
    "ForOfStatement",
    "BlockStatement",
    "Program",
  ];
  let is = js_node_types_is(node, types);
  return is;
}
