import { js_scope_binding_names } from "./js_scope_binding_names.mjs";
import { list_includes } from "./list_includes.mjs";
export function js_scope_binds_is(node, name) {
  "whether this one scope binds the name itself, rather than merely sitting around a scope that does";
  let names = js_scope_binding_names(node);
  let binds = list_includes(names, name);
  return binds;
}
