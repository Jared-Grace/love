import { property_equals } from "./property_equals.mjs";
import { list_filter } from "./list_filter.mjs";
import { js_literal_is } from "./js_literal_is.mjs";
import { js_literal_value_get } from "./js_literal_value_get.mjs";
import { list_find_or_null } from "./list_find_or_null.mjs";
export function js_html_style_helper_pick_try(helpers, prop, value_node) {
  "Which helper stands for setting this property to this value, or null if none does.";
  "A helper that fixes the value wins over one that passes a value through, because it says more with less: hiding a thing is one word rather than two, and the two-word form would still be correct but would leave the reader to notice that hidden is the interesting part. So a call setting visibility to hidden becomes the hidden helper, while one setting it to whatever a variable holds has to keep passing the variable.";
  "The value must be written out in the call for the specific helper to apply. A variable that happens to hold hidden at run time cannot be matched here, and must not be - the value is only knowable while the program runs, and this decides while it is being read.";
  function prop_is(helper) {
    let same = property_equals(helper, "prop", prop);
    return same;
  }
  let for_prop = list_filter(helpers, prop_is);
  let literal_is = js_literal_is(value_node);
  if (literal_is) {
    let value = js_literal_value_get(value_node);
    function fixed_is(helper) {
      let fixed = property_equals(helper, "kind", "fixed");
      if (!fixed) {
        return false;
      }
      let same = property_equals(helper, "value", value);
      return same;
    }
    let exact = list_find_or_null(for_prop, fixed_is);
    if (exact) {
      return exact;
    }
  }
  function through_is(helper) {
    let through = property_equals(helper, "kind", "value");
    return through;
  }
  let passing = list_find_or_null(for_prop, through_is);
  return passing;
}
