import { literals_unnamed_generic_found_found_files_by_literal } from "./literals_unnamed_generic_found_found_files_by_literal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function literals_unnamed_generic_found_found(getters, named, codes) {
  arguments_assert(arguments, 3);
  for (let getter of getters) {
    named[getter.literal] = getter.f_name;
  }
  let files_by_literal = {};
  literals_unnamed_generic_found_found_files_by_literal(
    codes,
    named,
    files_by_literal,
  );
  let found = [];
  let r = {
    files_by_literal,
    found,
  };
  return r;
}
