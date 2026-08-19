import { js_list_types_nodes } from "./js_list_types_nodes.mjs";
import { js_catch_clause_names } from "./js_catch_clause_names.mjs";
import { list_map_squash } from "./list_map_squash.mjs";
export function js_caught_names(ast) {
  "every name a catch clause anywhere in this tree binds for the length of the clause.";
  "The reading for one clause already existed and is asked here once per clause. What was missing was the walk: a catch clause is not a declaration and not a parameter list, so a gathering built from those two kinds passes straight over the name it binds, and the name comes back looking bound by nothing at all.";
  let nodes = js_list_types_nodes(ast, ["CatchClause"]);
  let names = list_map_squash(nodes, js_catch_clause_names);
  return names;
}
