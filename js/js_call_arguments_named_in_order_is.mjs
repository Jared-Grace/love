import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { equal_not } from "./equal_not.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { not } from "./not.mjs";
import { list_get } from "./list_get.mjs";
export function js_call_arguments_named_in_order_is(call, names) {
  "Whether this call is given exactly these names, in this order, and nothing else.";
  let args = property_get(call, "arguments");
  let size = list_size(args);
  let wanted = list_size(names);
  if (equal_not(size, wanted)) {
    return false;
  }
  let index = 0;
  for (let arg of args) {
    let name_is = js_node_type_is(arg, "Identifier");
    if (not(name_is)) {
      return false;
    }
    let name = property_get(arg, "name");
    let wanted_name = list_get(names, index);
    if (equal_not(name, wanted_name)) {
      return false;
    }
    index = index + 1;
  }
  return true;
}
