import {log_unparse} from "./log_unparse.mjs";
import {list_is} from "./list_is.mjs";
import {not} from "./not.mjs";
import {js_node_types_is} from "./js_node_types_is.mjs";
export function log_unparse_try(right) {
  let a = js_node_types_is(right, ["ImportSpecifier", "Identifier"]);
  let match = not(a || list_is(right));
  if (match) {
    log_unparse(right);
  }
}
