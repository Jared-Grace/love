import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_code_code_name_watched } from "./app_code_code_name_watched.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
export function app_code_code_lines_writes_out_watched(parent, lines) {
  arguments_assert(arguments, 2);
  ("a program that ends by writing out one name, drawn with that name written out after every change instead, beside everything it writes out");
  ("The lines handed in are the program as it would end with a single writing-out; the rewriting adds the others, and what is written out is worked out by running it rather than typed beside it, so a box cannot show a value its program does not give.");
  let code = list_join_newline(lines);
  let watched = app_code_code_name_watched(code);
  let output = eval_console_log_lines(watched);
  let container = app_code_code_lines_writes_out(parent, [watched], output);
  return container;
}
