import { js_free_names } from "./js_free_names.mjs";
import { list_intersect } from "./list_intersect.mjs";
export function js_imports_missing_specify_program(ast, candidates) {
  "the candidate functions this module references but never imports, asked of a file that need not export a single function - a script, or a module with several.";
  "Written out here in the same shape as the twin without the suffix so the two can be proved the same and collapsed into one. What the suffix once meant was that the other one looked only inside the exported declaration, so a name referenced at the top of a file was invisible to it; that was widened, and from then on the two were one question with two answers that had drifted apart.";
  let free = js_free_names(ast);
  let imports_missing = list_intersect(free, candidates);
  return imports_missing;
}
