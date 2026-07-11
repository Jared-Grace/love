import { js_unparse } from "../../../love/public/src/js_unparse.mjs";
import { log_inner } from "../../../love/public/src/log_inner.mjs";
export function log_unparse(f_name, node) {
  let code = js_unparse(node);
  log_inner(f_name, {
    [f_name]: code,
  });
}
