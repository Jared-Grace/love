import { list_map } from "./list_map.mjs";
import { js_declared_names } from "./js_declared_names.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
export function js_statements_declared_names(statements) {
  "The names a run of statements brings into being. Asked of a span that is about";
  "to move into a function of its own, these are the names that will leave with";
  "it.";
  let per_statement = list_map(statements, js_declared_names);
  let names = list_concat_multiple(per_statement);
  return names;
}
