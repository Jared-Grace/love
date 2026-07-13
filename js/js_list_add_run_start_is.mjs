import { list_first_is } from "./list_first_is.mjs";
import { list_previous } from "./list_previous.mjs";
import { js_list_add_call_try } from "./js_list_add_call_try.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { js_identifiers_names_equal } from "./js_identifiers_names_equal.mjs";
import { not } from "./not.mjs";
export function js_list_add_run_start_is(e, node, add) {
  let fi = list_first_is(e, node);
  if (fi) {
    return true;
  }
  let previous = list_previous(e, node);
  let previous_add = js_list_add_call_try(previous);
  if (null_is(previous_add)) {
    return true;
  }
  let list = property_get(add, "list");
  let previous_list = property_get(previous_add, "list");
  let same = js_identifiers_names_equal(previous_list, list);
  let start = not(same);
  return start;
}
