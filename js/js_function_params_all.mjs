import { js_list_types_nodes } from "./js_list_types_nodes.mjs";
import { js_function_params_of_nodes } from "./js_function_params_of_nodes.mjs";
export function js_function_params_all(ast) {
  "every parameter name bound anywhere in the tree — top-level plus every nested function, arrow, and function expression — so a nested parameter is never mistaken for a free reference";
  "The gathering and the reading are two functions now. This one gathers - the three kinds together, in one walk rather than three - and hands what it gathered to the reading. A caller that has already walked the tree for several readings at once calls that reading directly and does not come through here.";
  let types = [
    "FunctionDeclaration",
    "FunctionExpression",
    "ArrowFunctionExpression",
  ];
  let nodes = js_list_types_nodes(ast, types);
  let names = js_function_params_of_nodes(nodes);
  return names;
}
