import {log} from "./log.mjs";
import {js_unparse} from "./js_unparse.mjs";
export async function log_unparse(next) {
  let code = await js_unparse(next);
  log(code);
}
