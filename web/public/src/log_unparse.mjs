import { log } from "./log.mjs";
import { js_unparse } from "./js_unparse.mjs";
export function log_unparse(node) {
  let code = js_unparse(node);
  log(code);
}
