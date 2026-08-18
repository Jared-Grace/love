import { literals_unnamed_generic_found_r } from "./literals_unnamed_generic_found_r.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function literals_unnamed_generic_found(getters, codes) {
  arguments_assert(arguments, 2);
  let named = {};
  let r = literals_unnamed_generic_found_r(getters, named, codes);
  return r;
}
