import { js_scope_binds_is } from "./js_scope_binds_is.mjs";
import { js_scope_is } from "./js_scope_is.mjs";
import { js_scopes_enclosing_binding_names } from "./js_scopes_enclosing_binding_names.mjs";
import { js_visit } from "./js_visit.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function js_scopes_shadowing(ast, name) {
  "the scopes that bind this name while a scope around them binds it too — the inner half of a hiding, and so the half a rename should move. The outer binding is the one other code was written against, so moving that one instead would be the change that breaks something.";
  function collect(emit) {
    function consider(v) {
      let node = property_get(v, "node");
      let scope = js_scope_is(node);
      if (not(scope)) {
        return;
      }
      let binds = js_scope_binds_is(node, name);
      if (not(binds)) {
        return;
      }
      let stack = property_get(v, "stack");
      let enclosing = js_scopes_enclosing_binding_names(stack, node);
      let hidden = list_includes(enclosing, name);
      if (hidden) {
        emit(node);
      }
    }
    js_visit(ast, consider);
  }
  let scopes = list_adder(collect);
  return scopes;
}
