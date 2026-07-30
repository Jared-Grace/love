import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { js_catch_clause_names } from "./js_catch_clause_names.mjs";
import { list_map_squash } from "./list_map_squash.mjs";
export function js_catch_clause_names_all(ast) {
  "every name a catch clause binds anywhere in the tree, nested ones included - the same relation to the one-clause reading that the all-parameters reading has to one function's";
  ("a caught error is bound without being declared and without being written in a");
  ("parameter list, so neither of the two lists the free-name question was built");
  ("from could see it. Sixty-five names across fifty-eight files were being called");
  ("unbound on that account, every one of them a name the language binds perfectly");
  ("well.");
  let clauses = js_list_type_nodes(ast, "CatchClause");
  let names = list_map_squash(clauses, js_catch_clause_names);
  return names;
}
