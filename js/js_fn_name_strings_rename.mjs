import { fn_name } from "./fn_name.mjs";
import { js_visit_calls_named } from "./js_visit_calls_named.mjs";
import { fn_name_arg_get } from "./fn_name_arg_get.mjs";
import { property_get } from "./property_get.mjs";
import { equal_not } from "./equal_not.mjs";
import { js_string } from "./js_string.mjs";
import { object_replace } from "./object_replace.mjs";
export function js_fn_name_strings_rename(ast, f_name_before, f_name_after) {
  "A name written as a string is invisible to a rename that walks identifiers, so the marker call is what makes it visible again - its argument is a strong reference, and this moves it. The name is compared before it is replaced, because one file may hold several markers and only the one naming what is being renamed may move.";
  function lambda({ args }) {
    let value = fn_name_arg_get(args, f_name_before);
    let current = property_get(value, "value");
    let differs = equal_not(current, f_name_before);
    if (differs) {
      return;
    }
    let s = js_string(f_name_after);
    object_replace(value, s);
  }
  js_visit_calls_named(ast, fn_name("fn_name"), lambda);
}
