import { js_module_variable_names } from "./js_module_variable_names.mjs";
import { js_scopes_shadowing } from "./js_scopes_shadowing.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { each } from "./each.mjs";
export function js_module_state_shadowed(ast) {
  "The names of this file's own top-level state that a binding inside one of its";
  "functions hides.";
  "A variable at the top of a file is there because more than one call has to see";
  "it, and a cache is nearly always why. A function that binds the same word again";
  "fills a copy of its own, drops the copy at the closing brace, and every line";
  "reading the shared name still gets whatever it was started with.";
  "Functions declared at the top level are not asked about, because a function is";
  "reachable from anywhere once it lives in its own file and so is not shared state.";
  let names = js_module_variable_names(ast);
  let hidden = [];
  function name_each(name) {
    let scopes = js_scopes_shadowing(ast, name);
    if (list_empty_is(scopes)) {
      return;
    }
    list_add(hidden, name);
  }
  each(names, name_each);
  return hidden;
}
