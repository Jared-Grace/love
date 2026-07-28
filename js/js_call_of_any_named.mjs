import { js_call_of_named } from "./js_call_of_named.mjs";
import { list_any } from "./list_any.mjs";
export function js_call_of_any_named(node, f_names) {
  "Whether a value is a call to any one of the named functions. The single-name";
  "twin next door asks about one; a caller holding a whole register of them";
  "would otherwise loop, and a loop at a call site is a missing helper.";
  function lambda(f_name) {
    let called = js_call_of_named(node, f_name);
    return called;
  }
  let any = list_any(f_names, lambda);
  return any;
}
