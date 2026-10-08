import { js_code_if_else_lines_multiple } from "./js_code_if_else_lines_multiple.mjs";
export function js_code_if_else_lines(condition, statement_yes, statement_no) {
  "an if with an else, as the five lines it is written on: if (condition) {, the line run when it is true pushed in by two spaces, } else {, the line run when it is false pushed in the same, and the closing brace";
  let lines = js_code_if_else_lines_multiple(
    condition,
    [statement_yes],
    [statement_no],
  );
  return lines;
}
