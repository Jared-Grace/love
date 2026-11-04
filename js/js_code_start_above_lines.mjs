import { arguments_assert } from "./arguments_assert.mjs";
import { list_concat } from "./list_concat.mjs";
export function js_code_start_above_lines(loop_lines) {
  arguments_assert(arguments, 1);
  ("given what writes a loop around its condition and its lines, what writes a whole program of it: the statement it starts from on its own line, then the loop");
  function program_lines(start, condition, statements) {
    let looped = loop_lines(condition, statements);
    let lines = list_concat([start], looped);
    return lines;
  }
  return program_lines;
}
