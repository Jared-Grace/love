import { list_join_newline } from "./list_join_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
export function app_code_explain_program_draw(lines) {
  "an explain entry that shows a whole program and what it writes out, the card the reminder box is drawn as, asked by the human 2026-09-30 to close the clock lessons' explanations, so the answer that comes out is seen and not only said";
  "What it writes out is found by running the lines, not written beside them, so the card cannot claim an answer the code does not give.";
  function draw(box) {
    let code = list_join_newline(lines);
    let output = eval_console_log_lines(code);
    app_code_code_lines_writes_out(box, lines, output);
  }
  return draw;
}
