import { arguments_assert } from "./arguments_assert.mjs";
import { js_name_single_binding_is } from "./js_name_single_binding_is.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
export function js_name_fixed_is(ast, rebound, name) {
  arguments_assert(arguments, 3);
  ("Whether this name means one thing everywhere the file spells it and is never afterwards pointed at something else.");
  ("The two together are what let a mention of a name be moved somewhere else in the file, or stood in for by another name, without the meaning going with it. Meaning one thing everywhere says the word may be read anywhere without asking which of several it is; never being repointed says the answer is the same whenever it is asked, so a mention lifted from one line and put on another still says what it said.");
  ("The names already pointed somewhere else are handed in rather than worked out here, because a caller asks this about a whole handful of names at once and that reading walks the file.");
  let written_is = list_includes(rebound, name);
  if (written_is) {
    return false;
  }
  let single_is = js_name_single_binding_is(ast, name);
  if (not(single_is)) {
    return false;
  }
  return true;
}
