import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { list_reverse } from "../../../love/public/src/list_reverse.mjs";
import { js_boolean_values } from "../../../love/public/src/js_boolean_values.mjs";
export function boolean_to_binary(b) {
  let r = js_boolean_values();
  list_reverse(r);
  let includes = list_includes(r, b);
}
