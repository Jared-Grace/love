import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_call_arguments_get } from "../../../love/public/src/js_call_arguments_get.mjs";
export function js_call_argument_add(e, test) {
  let arguments2 = js_call_arguments_get(e);
  list_add(arguments2, test);
}
