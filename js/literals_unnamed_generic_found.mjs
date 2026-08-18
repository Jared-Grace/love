import { literals_unnamed_generic_found_found } from "./literals_unnamed_generic_found_found.mjs";
import { property_get } from "./property_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function literals_unnamed_generic_found(getters, codes) {
  arguments_assert(arguments, 2);
  let named = {};
  let r2 = literals_unnamed_generic_found_found(getters, named, codes);
  let found = property_get(r2, "found");
  let files_by_literal = property_get(r2, "files_by_literal");
  let r3 = {
    files_by_literal,
    found,
  };
  let r = r3;
  return r;
}
