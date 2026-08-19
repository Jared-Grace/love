import { less_than } from "./less_than.mjs";
import { js_list_type } from "./js_list_type.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { equal } from "./equal.mjs";
import { equal_not } from "./equal_not.mjs";
export function js_call_argument_site(ast, name) {
  "The one call this name is handed to as an argument, the place among that call's arguments where it sits, and the piece of the tree standing there. Nothing when no call is handed it, and nothing when more than one is.";
  "More than one is refused rather than answered for each, because whatever swaps this name for another one has to know that every place it is handed over agrees, and a reading that answers about a single place cannot say that.";
  let calls = js_list_type(ast, "CallExpression");
  let found = null;
  for (let v of calls) {
    let call = property_get(v, "node");
    let args = property_get(call, "arguments");
    let size = list_size(args);
    let index = 0;
    while (less_than(index, size)) {
      let arg = list_get(args, index);
      let name_is = js_node_type_is(arg, "Identifier");
      if (name_is) {
        let arg_name = property_get(arg, "name");
        if (equal(arg_name, name)) {
          if (equal_not(found, null)) {
            return null;
          }
          found = {
            call,
            index,
            argument: arg,
          };
        }
      }
      index = index + 1;
    }
  }
  return found;
}
