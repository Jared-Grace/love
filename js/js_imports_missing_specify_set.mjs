import { arguments_assert } from "./arguments_assert.mjs";
import { js_free_names } from "./js_free_names.mjs";
import { list_set_intersect } from "./list_set_intersect.mjs";
export function js_imports_missing_specify_set(ast, known) {
  arguments_assert(arguments, 2);
  ("The names this module reads and never imports, out of a set of names gathered beforehand.");
  ("The sibling of the same question asked against a list, for a caller asking it of thousands of files in a row. Asking it against a list gathers that list into a set again for every single file: measured 2026-08-14, the nine thousand names this repo answers to, re-gathered once for each of seven thousand files, cost thirteen seconds of pure gathering inside a seventy second gate. The gathering is handed to the caller, who is the one who knows the names are not changing between files.");
  let free = js_free_names(ast);
  let imports_missing = list_set_intersect(free, known);
  return imports_missing;
}
