import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_concat } from "./list_concat.mjs";
import { property_exists_not } from "./property_exists_not.mjs";
import { list_any } from "./list_any.mjs";
export function js_fold_block_any_unbound(match, params, return_local) {
  arguments_assert(arguments, 3);
  let start = property_get(match, "start");
  let binding = property_get(match, "binding");
  let needed = list_concat(params, [return_local]);
  function unbound_is(name) {
    let missing = property_exists_not(binding, name);
    return missing;
  }
  let any_unbound = list_any(needed, unbound_is);
  let r = {
    start,
    binding,
    any_unbound,
  };
  return r;
}
