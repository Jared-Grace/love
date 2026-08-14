import { arguments_assert } from "./arguments_assert.mjs";
import { list_map_squash } from "./list_map_squash.mjs";
import { js_catch_clause_names } from "./js_catch_clause_names.mjs";
export function js_catch_clause_names_of_nodes(clauses) {
  arguments_assert(arguments, 1);
  ("Every name bound by catch clauses already gathered.");
  ("The reading itself, kept apart from the gathering, so that a caller who has walked the tree once for several readings may hand it what it walked rather than sending it off to walk again.");
  let names = list_map_squash(clauses, js_catch_clause_names);
  return names;
}
