import { log } from "./log.mjs";
import { js_unparse } from "./js_unparse.mjs";
export function log_unparse(next) {
  let code = js_unparse(next);
  log(code);
}
