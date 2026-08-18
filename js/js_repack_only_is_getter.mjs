import { arguments_assert } from "./arguments_assert.mjs";
import { js_repack_only_is_made } from "./js_repack_only_is_made.mjs";
import { property_get } from "./property_get.mjs";
export function js_repack_only_is_getter(declaration) {
  arguments_assert(arguments, 1);
  let r2 = js_repack_only_is_made(declaration);
  let made = property_get(r2, "made");
  let lifted = property_get(r2, "lifted");
  let assigned = property_get(r2, "assigned");
  let getter = property_get(r2, "getter");
  let r = {
    made,
    lifted,
    assigned,
    getter,
  };
  return r;
}
