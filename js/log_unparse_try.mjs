import { log_unparse } from "../../../love/public/src/log_unparse.mjs";
import { list_is } from "../../../love/public/src/list_is.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { js_node_types_is } from "../../../love/public/src/js_node_types_is.mjs";
export function log_unparse_try(right) {
  let a = js_node_types_is(right, ["ImportSpecifier", "Identifier"]);
  let match = not(a || list_is(right));
  if (match) {
    log_unparse(right);
  }
}
