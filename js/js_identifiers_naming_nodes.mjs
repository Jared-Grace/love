import { js_visit_types } from "./js_visit_types.mjs";
import { js_visit_nodes_lambda } from "./js_visit_nodes_lambda.mjs";
import { list_adder } from "./list_adder.mjs";
import { js_identifiers_naming_of_nodes } from "./js_identifiers_naming_of_nodes.mjs";
export function js_identifiers_naming_nodes(ast) {
  "the Identifier nodes that NAME something rather than reference a value — the log in console.log, the key in { log: 1 }";
  "a name in these positions is text, not a variable, so it must never count as using an import: that is what made console.log(x) pull in an unused import of this repo's own log";
  "The gathering and the reading are two functions now. This one gathers, in the order the tree has them, and hands what it gathered to the reading. A caller that has already walked the tree for several readings at once calls that reading directly and does not come through here.";
  let types = [
    "MemberExpression",
    "Property",
    "MethodDefinition",
    "PropertyDefinition",
    "MetaProperty",
  ];
  ("a method's name and a field's name sit in the same position as a key in an object and are just as much text rather than a variable");
  function lambda2(la) {
    let lambda_node = js_visit_nodes_lambda(la);
    js_visit_types(ast, types, lambda_node);
  }
  let nodes = list_adder(lambda2);
  let naming = js_identifiers_naming_of_nodes(nodes);
  return naming;
}
