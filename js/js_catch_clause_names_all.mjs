import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { js_catch_clause_names_of_nodes } from "./js_catch_clause_names_of_nodes.mjs";
export function js_catch_clause_names_all(ast) {
  "every name a catch clause binds anywhere in the tree, nested ones included - the same relation to the one-clause reading that the all-parameters reading has to one function's";
  "a caught error is bound without being declared and without being written in a parameter list, so neither of the two lists the free-name question was built from could see it. Sixty-five names across fifty-eight files were being called unbound on that account, every one of them a name the language binds perfectly well.";
  "The gathering and the reading are two functions now. This one gathers and hands what it gathered to the reading. A caller that has already walked the tree for several readings at once calls that reading directly and does not come through here.";
  let clauses = js_list_type_nodes(ast, "CatchClause");
  let names = js_catch_clause_names_of_nodes(clauses);
  return names;
}
