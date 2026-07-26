import { js_free_names } from "./js_free_names.mjs";
import { list_intersect } from "./list_intersect.mjs";
export function js_imports_missing_specify(ast, candidates) {
  "the candidate functions this module references but never imports. A name bound anywhere in the file is not one of them, and that is the whole of the fix: subtracting only the imports and the module's own name made every local variable or parameter sharing a function's name look like a missing import, and the import then read as used ever after, because the local's own mentions were what counted it.";
  let free = js_free_names(ast);
  let imports_missing = list_intersect(free, candidates);
  return imports_missing;
}
