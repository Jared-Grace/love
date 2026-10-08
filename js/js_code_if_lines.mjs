import { js_code_if_lines_multiple } from "./js_code_if_lines_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function js_code_if_lines(condition, statement) {
  arguments_assert(arguments, 2);
  ("an if around one line, as the three lines it is written on: if (condition) {, the line pushed in by two spaces, and the closing brace");
  ("Handed back as lines rather than one string, because the card that shows a program and what it writes out takes its program as lines; a caller wanting one string joins them with a newline.");
  let lines = js_code_if_lines_multiple(condition, [statement]);
  return lines;
}
