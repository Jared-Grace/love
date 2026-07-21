import { command_line_code_ignore } from "./command_line_code_ignore.mjs";
import { property_get } from "./property_get.mjs";
export async function command_line_code_ignore_stdout(command) {
  ("what a command printed, as text, from a command whose nonzero exit is an answer rather than a failure");
  ("the same shape as command_line_stdout so the two variants can be swapped without also remembering which one hands back an object");
  let result = await command_line_code_ignore(command);
  let v = property_get(result, "stdout");
  return v;
}
