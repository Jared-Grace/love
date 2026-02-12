import { js_unparse } from "../../../love/public/src/js_unparse.mjs";
import { log_keep } from "./log_keep.mjs";
export function log_unparse(node) {
  let code = js_unparse(node);
  log_keep({
    code,
  });
}
