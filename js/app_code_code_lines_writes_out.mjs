import { app_code_writes_out_line } from "./app_code_writes_out_line.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_code_lines } from "./html_div_code_lines.mjs";
export function app_code_code_lines_writes_out(parent, lines, value) {
  arguments_assert(arguments, 3);
  ("a program and what it writes out, the pair a lesson shows in a box read before the questions start");
  ("It is the worked example's own pair - code, and then the value that came out of it - drawn in the plainer clothes a light blue box wears. The example screen binds the two together because they swap together when another example is asked for; nothing swaps here, so the labels stay plain writing and only the pairing is kept.");
  ("A program of one line is handed over as a list of one. The pair is the same pair whether the program is one line or four, and a caller choosing between two functions by counting its own lines would be choosing between them by something that is not the difference.");
  html_div_code_lines(parent, lines);
  app_code_writes_out_line(parent, value);
}
