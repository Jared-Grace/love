import { list_map_concat_multiple } from "./list_map_concat_multiple.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { js_function_declaration_params_names } from "./js_function_declaration_params_names.mjs";
export function js_function_params_all(ast) {
  "every parameter name bound anywhere in the tree — top-level plus every nested function, arrow, and function expression — so a nested parameter is never mistaken for a free reference";
  let types = [
    "FunctionDeclaration",
    "FunctionExpression",
    "ArrowFunctionExpression",
  ];
  function nodes_of(type) {
    let nodes2 = js_list_type_nodes(ast, type);
    return nodes2;
  }
  let nodes = list_map_concat_multiple(types, nodes_of);
  let names = list_map_concat_multiple(
    nodes,
    js_function_declaration_params_names,
  );
  return names;
}
