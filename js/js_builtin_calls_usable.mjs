import { js_builtin_calls } from "./js_builtin_calls.mjs";
import { js_flo_name } from "./js_flo_name.mjs";
import { js_binding_names } from "./js_binding_names.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_filter_property_path_not } from "./list_filter_property_path_not.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { property_path_get } from "./property_path_get.mjs";
export function js_builtin_calls_usable(ast) {
  "The built-in methods that may be rewritten in this one file: every pairing the repo keeps, less the two kinds that would turn a working file into a broken one.";
  "A file is never rewritten into a call to itself. The function standing for a method is written out of the built-in call, so rewriting inside it would leave it calling itself with what it was given and running out of stack the first time anything reached it.";
  "A file that binds the word itself is left alone too. A call written there reaches whatever the file binds rather than the function meant, and the import added for it would sit behind a local nothing can see past - which is the same hiding the repo already refuses to let anybody write by hand.";
  let calls = js_builtin_calls();
  let own = js_flo_name(ast);
  let others = list_filter_property_path_not(calls, ["fn", "name"], own);
  let bound = js_binding_names(ast);
  function free_is(o) {
    let f_name = property_path_get(o, ["fn", "name"]);
    let free = list_includes_not(bound, f_name);
    return free;
  }
  let usable = list_filter(others, free_is);
  return usable;
}
