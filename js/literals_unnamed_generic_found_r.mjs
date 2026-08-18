import { arguments_assert } from "./arguments_assert.mjs";
import { literals_unnamed_generic_found_found } from "./literals_unnamed_generic_found_found.mjs";
import { property_get } from "./property_get.mjs";
export function literals_unnamed_generic_found_r(getters, named, codes) {
  arguments_assert(arguments, 3);
  let r2 = literals_unnamed_generic_found_found(getters, named, codes);
  let found = property_get(r2, "found");
  let files_by_literal = property_get(r2, "files_by_literal");
  let r = {
    files_by_literal,
    found,
  };
  return r;
}
