import { arguments_assert } from "./arguments_assert.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { js_name_number_is } from "./js_name_number_is.mjs";
export function js_compare_text_number_name_kind_of(kinds) {
  arguments_assert(arguments, 1);
  function kind_of(name) {
    let kept = property_or_null(kinds, name);
    let unknown = null_is(kept);
    if (not(unknown)) {
      return kept;
    }
    let numbered = js_name_number_is(name);
    if (numbered) {
      let r = "number";
      return r;
    }
    let r2 = "";
    return r2;
  }
  return kind_of;
}
