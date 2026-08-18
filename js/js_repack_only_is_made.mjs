import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_assigned_names } from "./js_assigned_names.mjs";
export function js_repack_only_is_made(declaration) {
  arguments_assert(arguments, 1);
  let getter = fn_name("property_get");
  let assigned = js_assigned_names(declaration);
  let lifted = 0;
  let made = 0;
  let r = {
    getter,
    assigned,
    lifted,
    made,
  };
  return r;
}
