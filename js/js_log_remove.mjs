import { js_statement_call_remove } from "./js_statement_call_remove.mjs";
import { log } from "./log.mjs";
export function js_log_remove(ast) {
  let fn = log;
  js_statement_call_remove(ast, fn);
}
