import { arguments_assert } from "./arguments_assert.mjs";
import { list_map_squash } from "./list_map_squash.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_is } from "./js_node_is.mjs";
import { not } from "./not.mjs";
import { js_function_declaration_params_names_node } from "./js_function_declaration_params_names_node.mjs";
export function js_declared_names_of_nodes(binding_nodes) {
  arguments_assert(arguments, 1);
  ("The names bound by pieces of parsed code already gathered - each function declared, each class, each name a variable declaration binds.");
  ("The reading itself, kept apart from the gathering, so that a caller who has walked the tree once for several readings may hand it what it walked rather than sending it off to walk again.");
  ("a declaration can bind more than one name at once, by unpacking, and the reading that already knows every unpacking shape - object, list, rest, default, and a skipped slot - is the one a parameter list is read with, and it is asked here too rather than written again.");
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
