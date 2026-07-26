import { js_declared_names } from "./js_declared_names.mjs";
import { js_function_params_all } from "./js_function_params_all.mjs";
import { list_concat } from "./list_concat.mjs";
export function js_binding_names(ast) {
  "every name this module binds itself: declared functions and variables plus every parameter, nested scopes included. Duplicates are kept on purpose — a name bound twice is the signal. Imported names are excluded, because an import binds the repo function itself, which is the thing that must not be shadowed.";
  let declared = js_declared_names(ast);
  let params = js_function_params_all(ast);
  let names = list_concat(declared, params);
  return names;
}
