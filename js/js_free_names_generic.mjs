import { js_free_names_node_types } from "./js_free_names_node_types.mjs";
import { js_list_types_nodes } from "./js_list_types_nodes.mjs";
import { js_nodes_of_types } from "./js_nodes_of_types.mjs";
import { js_identifiers_naming_of_nodes } from "./js_identifiers_naming_of_nodes.mjs";
import { js_declared_names_of_nodes } from "./js_declared_names_of_nodes.mjs";
import { js_function_params_of_nodes } from "./js_function_params_of_nodes.mjs";
import { js_catch_clause_names_of_nodes } from "./js_catch_clause_names_of_nodes.mjs";
import { js_global_names } from "./js_global_names.mjs";
import { list_map_property_unique } from "./list_map_property_unique.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_difference } from "./list_difference.mjs";
export function js_free_names_generic(node, bound_also) {
  "The names read inside something that nothing inside it binds - not declared there, not handed to it, not caught by it, not a word JS already answers to";
  "Four of the five ways a name can be bound are read off the node itself and are the same wherever the question is asked. The fifth depends entirely on what is being asked about, and is handed in: a whole module binds by importing, while a lone declaration binds by being the very function whose name is written. Neither can be read off the other, which is why the two are separate questions at all - and everything else about them was the same, which is why they are one run of work here";
  "Nothing is said here about which reading is the right one for a caller. That belongs to the two named questions above this, and the difference between them is now exactly the one argument";
  "The tree is walked once, for every kind any of the readings wants, and each reading is then handed its own kinds out of what that walk gathered. Each used to go and walk the tree for itself - five walks of the same tree for one answer, and this answer is wanted for every file the repo holds. Measured 2026-08-14 over nine thousand files: ten and a quarter seconds of walking against two and a half.";
  let types = js_free_names_node_types();
  let gathered = js_list_types_nodes(node, types);
  let identifiers = js_nodes_of_types(gathered, ["Identifier"]);
  let naming_sources = js_nodes_of_types(gathered, [
    "MemberExpression",
    "Property",
    "MethodDefinition",
    "PropertyDefinition",
    "MetaProperty",
  ]);
  let naming = js_identifiers_naming_of_nodes(naming_sources);
  let referenced_nodes = list_difference(identifiers, naming);
  let referenced = list_map_property_unique(referenced_nodes, "name");
  let binding_nodes = js_nodes_of_types(gathered, [
    "FunctionDeclaration",
    "ClassDeclaration",
    "VariableDeclarator",
  ]);
  let names = js_declared_names_of_nodes(binding_nodes);
  let param_nodes = js_nodes_of_types(gathered, [
    "FunctionDeclaration",
    "FunctionExpression",
    "ArrowFunctionExpression",
  ]);
  let names2 = js_function_params_of_nodes(param_nodes);
  ("A caught error is bound by neither of the two lists above - it is not declared and it is not written in a parameter list - so it is asked for on its own");
  let clauses = js_nodes_of_types(gathered, ["CatchClause"]);
  let names3 = js_catch_clause_names_of_nodes(clauses);
  let names4 = js_global_names();
  let bound = list_concat_multiple([bound_also, names, names2, names3, names4]);
  let free = list_difference(referenced, bound);
  return free;
}
