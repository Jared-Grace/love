import { app_code_value_line } from "./app_code_value_line.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_writes_out_line(parent, value) {
  arguments_assert(arguments, 2);
  ("the line under a piece of code that says what it writes out");
  ("Every lesson that shows a program and then says what comes out of it says it this way, in these words. Two lessons wording it differently would be asking a learner to notice a difference that is not there.");
  let span = app_code_value_line(parent, "This writes out: ", value);
  return span;
}
