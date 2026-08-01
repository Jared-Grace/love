import { list_map_concat_multiple } from "./list_map_concat_multiple.mjs";
import { js_identifiers_referenced_names } from "./js_identifiers_referenced_names.mjs";
export function js_statements_referenced_names(statements) {
  "The names a run of statements reads. Asked of what follows a span that is about";
  "to move away, these are the names that must still be there afterwards.";
  let names = list_map_concat_multiple(
    statements,
    js_identifiers_referenced_names,
  );
  return names;
}
