import { arguments_assert } from "./arguments_assert.mjs";
import { js_scope_binding_names_remembered } from "./js_scope_binding_names_remembered.mjs";
import { js_scope_is } from "./js_scope_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_last_or_null } from "./list_last_or_null.mjs";
import { set_includes } from "./set_includes.mjs";
export function js_scope_binder_nearest_remembered(stack, name, remembered) {
  arguments_assert(arguments, 3);
  ("The same answer as the twin without the suffix - which binding a mention of this name is reading - for a caller asking it of every mention in a file rather than once.");
  ("The two are the same walk over the ancestors, and the only difference is where what each scope binds comes from: worked out afresh for one asking, or read out of a lookup the caller keeps across all of its askings.");
  function binds(node) {
    let scope = js_scope_is(node);
    if (scope) {
      let bound = js_scope_binding_names_remembered(node, remembered);
      let binds_name = set_includes(bound, name);
      return binds_name;
    }
    return false;
  }
  let binders = list_filter(stack, binds);
  let nearest = list_last_or_null(binders);
  return nearest;
}
