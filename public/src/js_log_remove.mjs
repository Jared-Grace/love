import { js_statement_call_remove } from "../../../love/public/src/js_statement_call_remove.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function js_log_remove(ast) {
  marker("1");
  let fn = log;
  js_statement_call_remove(fn, ast);
}
