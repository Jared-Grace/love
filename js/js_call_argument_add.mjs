import { list_add } from "./list_add.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
export function js_call_argument_add(e, test) {
  let arguments2 = js_call_arguments_get(e);
  list_add(arguments2, test);
}
