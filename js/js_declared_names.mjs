import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_function_declaration_name } from "./js_function_declaration_name.mjs";
export function js_declared_names(ast) {
  let functions = js_list_type_nodes(ast, "FunctionDeclaration");
  let declarators = js_list_type_nodes(ast, "VariableDeclarator");
  let binding_nodes = list_concat(functions, declarators);
  function identifier_bound(node) {
    let id = property_get(node, "id");
    let bound = js_node_type_is(id, "Identifier");
    return bound;
  }
  let named = list_filter(binding_nodes, identifier_bound);
  let names = list_map(named, js_function_declaration_name);
  return names;
}
