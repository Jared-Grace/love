import { arguments_assert } from "./arguments_assert.mjs";
import { js_fold_block_any_unbound } from "./js_fold_block_any_unbound.mjs";
import { property_get } from "./property_get.mjs";
export function js_fold_block_start(match, params, return_local) {
  arguments_assert(arguments, 3);
  let r2 = js_fold_block_any_unbound(match, params, return_local);
  let any_unbound = property_get(r2, "any_unbound");
  let binding = property_get(r2, "binding");
  let start = property_get(r2, "start");
  let r = {
    any_unbound,
    binding,
    start,
  };
  return r;
}
