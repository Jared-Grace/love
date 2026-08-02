import { property_get } from "./property_get.mjs";
import { js_builtin_calls_rewrite } from "./js_builtin_calls_rewrite.mjs";
import { list_map_fn_names } from "./list_map_fn_names.mjs";
import { js_imports_missing_add_specified } from "./js_imports_missing_add_specified.mjs";
export async function js_builtin_to_calls(ast) {
  "Point every call to a built-in method in this file at the function the repo already keeps for it, and bring that function in.";
  "The same move the operator pass makes, one step further out. An operator written between two numbers and a method written after a dot are both the language saying something this repo says with a name, and a reading that stops at the operators leaves 222 of these standing beside functions written to replace them.";
  "Nothing here is a choice, so nothing is an argument. The list of pairings says which methods are covered, the file says which of them it may use, and every call matching one is rewritten - so this is safe to run on a file in any state and safe to run twice, a covered built-in call being the one thing it changes and a rewritten call no longer being one.";
  let rewritten = js_builtin_calls_rewrite(ast);
  let usable = property_get(rewritten, "usable");
  let names = list_map_fn_names(usable);
  await js_imports_missing_add_specified(ast, names);
  let moved = property_get(rewritten, "moved");
  return moved;
}
