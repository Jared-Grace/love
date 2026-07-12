import { js_unparse } from "./js_unparse.mjs";
import { log_inner } from "./log_inner.mjs";
export function log_unparse(f_name, node) {
  let code = js_unparse(node);
  log_inner(f_name, {
    [f_name]: code,
  });
}
