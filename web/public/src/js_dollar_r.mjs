import { log } from "./log.mjs";
import { object_replace } from "./object_replace.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { js_code_return_empty } from "./js_code_return_empty.mjs";
export function js_dollar_r({ stack1, stack2 }) {
  log(stack2);
  let code = js_code_return_empty();
  let from = js_parse_statement(code);
  object_replace(stack1, from);
}
