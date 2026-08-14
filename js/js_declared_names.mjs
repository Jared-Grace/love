import { js_list_types_nodes } from "./js_list_types_nodes.mjs";
import { js_declared_names_of_nodes } from "./js_declared_names_of_nodes.mjs";
export function js_declared_names(ast) {
  "every name this file declares for itself - each function it declares, each class, and each name a variable declaration binds, nested scopes and all";
  "a declaration can bind more than one name at once, by unpacking. Asking only for declarations whose name is a single plain word left sixty-eight such names in forty files looking bound by nothing, and the free-name question is built on this one, so each of those was a name the import-repairing pass believed it might have to go and import.";
  "The gathering and the reading are two functions now. This one gathers - the three kinds together, in one walk rather than three - and hands what it gathered to the reading. A caller that has already walked the tree for several readings at once calls that reading directly and does not come through here.";
  let types = ["FunctionDeclaration", "ClassDeclaration", "VariableDeclarator"];
  let binding_nodes = js_list_types_nodes(ast, types);
  let names = js_declared_names_of_nodes(binding_nodes);
  return names;
}
