import { js_unparse } from "../../../love/public/src/js_unparse.mjs";
import { log } from "./log.mjs";
export function log_unparse(node) {
  let code = js_unparse(node);
  log({
    code,
  });
}
