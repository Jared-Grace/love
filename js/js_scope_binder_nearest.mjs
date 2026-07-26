import { js_scope_binds_is } from "./js_scope_binds_is.mjs";
import { js_scope_is } from "./js_scope_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_last_or_null } from "./list_last_or_null.mjs";
export function js_scope_binder_nearest(stack, name) {
  "which binding a mention of this name is actually reading: the innermost scope around it that binds the name, or nothing when no scope does and the name comes from outside the file. A visitor hands the ancestors down outermost-first, so the innermost binder is the last of them.";
  function binds(node) {
    let scope = js_scope_is(node);
    if (scope) {
      let bound = js_scope_binds_is(node, name);
      return bound;
    }
    return false;
  }
  let binders = list_filter(stack, binds);
  let nearest = list_last_or_null(binders);
  return nearest;
}
