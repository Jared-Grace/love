import { list_add_multiple } from "./list_add_multiple.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
export function js_call_arguments_add(call, added) {
  "append several argument nodes to a call at once, the plural of the twin that appends one";
  let arguments2 = js_call_arguments_get(call);
  list_add_multiple(arguments2, added);
}
