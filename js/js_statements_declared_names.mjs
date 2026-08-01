import { list_map_concat_multiple } from "./list_map_concat_multiple.mjs";
import { js_declared_names } from "./js_declared_names.mjs";
export function js_statements_declared_names(statements) {
  "The names a run of statements brings into being. Asked of a span that is about";
  "to move into a function of its own, these are the names that will leave with";
  "it.";
  let names = list_map_concat_multiple(statements, js_declared_names);
  return names;
}
