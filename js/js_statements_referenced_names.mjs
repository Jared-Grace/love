import { list_map } from "./list_map.mjs";
import { js_identifiers_referenced_names } from "./js_identifiers_referenced_names.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
export function js_statements_referenced_names(statements) {
  "The names a run of statements reads. Asked of what follows a span that is about";
  "to move away, these are the names that must still be there afterwards.";
  let per_statement = list_map(statements, js_identifiers_referenced_names);
  let names = list_concat_multiple(per_statement);
  return names;
}
