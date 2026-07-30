import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_map_squash } from "./list_map_squash.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_is } from "./js_node_is.mjs";
import { not } from "./not.mjs";
import { js_function_declaration_params_names_node } from "./js_function_declaration_params_names_node.mjs";
export function js_declared_names(ast) {
  "every name this file declares for itself - each function it declares, each class, and each name a variable declaration binds, nested scopes and all";
  ("a declaration can bind more than one name at once, by unpacking. Asking only for");
  ("declarations whose name is a single plain word left sixty-eight such names in");
  ("forty files looking bound by nothing, and the free-name question is built on");
  ("this one, so each of those was a name the import-repairing pass believed it");
  ("might have to go and import. The reading that already knows every unpacking");
  ("shape - object, list, rest, default, and a skipped slot - is the one a parameter");
  ("list is read with, and it is asked here too rather than written again.");
  let functions = js_list_type_nodes(ast, "FunctionDeclaration");
  let classes = js_list_type_nodes(ast, "ClassDeclaration");
  let declarators = js_list_type_nodes(ast, "VariableDeclarator");
  let binding_nodes = list_concat_multiple([functions, classes, declarators]);
  function names_of(node) {
    let id = property_get(node, "id");
    let bound = js_node_is(id);
    if (not(bound)) {
      ("an exported default function need not be named, and names nothing when it is not");
      let none = [];
      return none;
    }
    let names_inner = js_function_declaration_params_names_node(id);
    return names_inner;
  }
  let names = list_map_squash(binding_nodes, names_of);
  return names;
}
