import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { js_function_declaration_params_names } from "./js_function_declaration_params_names.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_map } from "./list_map.mjs";
export function js_function_params_all(ast) {
  "every parameter name bound anywhere in the tree — top-level plus every nested function, arrow, and function expression — so a nested parameter is never mistaken for a free reference";
  let types = [
    "FunctionDeclaration",
    "FunctionExpression",
    "ArrowFunctionExpression",
  ];
  function nodes_of(type) {
    return js_list_type_nodes(ast, type);
  }
  let node_lists = list_map(types, nodes_of);
  let nodes = list_concat_multiple(node_lists);
  let name_lists = list_map(nodes, js_function_declaration_params_names);
  let names = list_concat_multiple(name_lists);
  return names;
}
