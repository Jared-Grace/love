import { js_list_types_nodes } from "./js_list_types_nodes.mjs";
import { js_function_expression_own_names } from "./js_function_expression_own_names.mjs";
import { list_map_squash } from "./list_map_squash.mjs";
export function js_function_expressions_own_names(ast) {
  "every name a function expression anywhere in this tree carries for itself - the name it can call itself by, readable inside it and nowhere else.";
  "The reading for one such function already existed and is asked here once per function. What was missing was the walk: the name is not a declaration, because nothing around the function can read it, and it is not a parameter, so a gathering built from those two kinds never sees it.";
  let nodes = js_list_types_nodes(ast, ["FunctionExpression"]);
  let names = list_map_squash(nodes, js_function_expression_own_names);
  return names;
}
