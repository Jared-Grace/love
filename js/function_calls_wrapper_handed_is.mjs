import { arguments_assert } from "./arguments_assert.mjs";
import { function_calls_forwarding_wrapper_names } from "./function_calls_forwarding_wrapper_names.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { function_wrapper_handed_is } from "./function_wrapper_handed_is.mjs";
import { not } from "./not.mjs";
export async function function_calls_wrapper_handed_is(f_name) {
  arguments_assert(arguments, 1);
  ("whether this function is only ever called by a wrapper that hands it that wrapper's whole parameter list, every one of those wrappers being itself handed somewhere as a value");
  ("this is the lifted-body case. the canonicalizing pass takes a function written inline in a slot, gives it a file of its own, and leaves a small wrapper behind where it stood. the wrapper keeps the shape the slot demands, so the exemption for a function handed over as a value catches the wrapper - and the body it now calls, one hop away, is left looking like a function that asked for a parameter it never reads. it asked for nothing; the slot did");
  ("one call site of another shape is enough to answer no, because then the parameter list really is the function's own at least once. a function nothing calls answers no as well: nothing fixed its list from outside, so every name in it was its own choice");
  let sites = await function_calls_forwarding_wrapper_names(f_name);
  let none_is = list_empty_is(sites);
  if (none_is) {
    return false;
  }
  for (let site of sites) {
    let wrapper = property_get(site, "wrapper");
    let unwrapped_is = null_is(wrapper);
    if (unwrapped_is) {
      return false;
    }
    let file = property_get(site, "file");
    let handed = await function_wrapper_handed_is(file, wrapper);
    if (not(handed)) {
      return false;
    }
  }
  return true;
}
