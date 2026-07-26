import { each } from "./each.mjs";
import { js_scope_binding_names } from "./js_scope_binding_names.mjs";
import { js_scope_is } from "./js_scope_is.mjs";
import { js_scopes_enclosing_binding_names } from "./js_scopes_enclosing_binding_names.mjs";
import { js_visit } from "./js_visit.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { list_intersect } from "./list_intersect.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function js_shadowing_names(ast) {
  "the names bound inside a scope that a scope around it already binds. From there down the one name means two things, and a line written for the outer one silently reads the inner: the bug a pasted-in block brings with it, since the paste carries its own declaration and the lines below it were written against the older name. Two scopes side by side reusing a name are not this — neither can see the other, so nothing is hidden.";
  function collect(emit) {
    function consider(v) {
      let node = property_get(v, "node");
      let scope = js_scope_is(node);
      if (not(scope)) {
        return;
      }
      let stack = property_get(v, "stack");
      let enclosing = js_scopes_enclosing_binding_names(stack, node);
      let names = js_scope_binding_names(node);
      let shadowing = list_intersect(names, enclosing);
      each(shadowing, emit);
    }
    js_visit(ast, consider);
  }
  let shadowed = list_adder_unique(collect);
  return shadowed;
}
