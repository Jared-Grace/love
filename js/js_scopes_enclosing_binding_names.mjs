import { js_scope_binding_names } from "./js_scope_binding_names.mjs";
import { js_scope_is } from "./js_scope_is.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
export function js_scopes_enclosing_binding_names(stack, node) {
  "every name still visible from outside this scope — what the scopes it sits inside bind. A visitor hands down the whole chain of ancestors, so the scopes among them, less this one, are exactly the enclosing scopes.";
  let scopes = list_filter(stack, js_scope_is);
  let outer = list_difference(scopes, [node]);
  let name_lists = list_map(outer, js_scope_binding_names);
  let names = list_concat_multiple(name_lists);
  return names;
}
