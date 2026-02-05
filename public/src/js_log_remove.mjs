import { js_statement_call_remove } from "../../../love/public/src/js_statement_call_remove.mjs";
import { log } from "../../../love/public/src/log.mjs";
export function js_log_remove(ast) {
  let fn = log;
  js_statement_call_remove(ast, fn);
}
