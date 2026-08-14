import { list_unique_set } from "./list_unique_set.mjs";
import { js_imports_missing_specify_set } from "./js_imports_missing_specify_set.mjs";
export function js_imports_missing_specify(ast, candidates) {
  "the candidate functions this module references but never imports. A name bound anywhere in the file is not one of them, and that is the whole of the fix: subtracting only the imports and the module's own name made every local variable or parameter sharing a function's name look like a missing import, and the import then read as used ever after, because the local's own mentions were what counted it.";
  "The candidates are gathered into a set and the question is then asked of that set. A caller with one file to ask about is served exactly as before; a caller walking thousands of files should gather the set itself, once, and ask the set-taking sibling instead.";
  let known = list_unique_set(candidates);
  let imports_missing = js_imports_missing_specify_set(ast, known);
  return imports_missing;
}
