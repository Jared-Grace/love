import { list_map_concat_multiple } from "./list_map_concat_multiple.mjs";
import { js_list_types_nodes } from "./js_list_types_nodes.mjs";
import { js_function_declaration_params_names } from "./js_function_declaration_params_names.mjs";
export function js_function_params_all(ast) {
  "every parameter name bound anywhere in the tree — top-level plus every nested function, arrow, and function expression — so a nested parameter is never mistaken for a free reference";
  let types = [
    "FunctionDeclaration",
    "FunctionExpression",
    "ArrowFunctionExpression",
  ];
  ("The three kinds are asked for together, so the tree is walked once rather than once for each of them. The answer is the same list in the same order - the grouping by kind is kept - and this reading is one of the four the free-name question is built on, which is asked of every file in the repo.");
  let nodes = js_list_types_nodes(ast, types);
  let names = list_map_concat_multiple(
    nodes,
    js_function_declaration_params_names,
  );
  return names;
}
