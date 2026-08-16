import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_call_arg } from "./js_code_call_arg.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
import { js_console_log_name } from "./js_console_log_name.mjs";
export function js_code_console_log_statement(code) {
  arguments_assert(arguments, 1);
  ("the line that writes one thing out, ended the way a line is ended: console.log(a);");
  ("What goes inside is handed over as code already, so a name, a number and a whole expression are all the same to it.");
  let call = js_code_call_arg(js_console_log_name(), code);
  let statement = js_code_statement(call);
  return statement;
}
