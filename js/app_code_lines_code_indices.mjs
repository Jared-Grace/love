import { greater_than } from "./greater_than.mjs";
import { list_to_indices } from "./list_to_indices.mjs";
import { list_get } from "./list_get.mjs";
import { text_starts_with_not } from "./text_starts_with_not.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_code_quiz_tokens } from "./app_code_quiz_tokens.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_size } from "./list_size.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export function app_code_lines_code_indices(lines) {
  "The places in a program that hold code, as opposed to a comment - the lines a student could be asked to build.";
  "A COMMENT IS NEVER ONE OF THEM. Its words are the writer's own and could be anything, so there is no way to build one from pieces, and nothing the program does would say whether it was built right.";
  "NOR IS A LINE OF ONE PIECE, such as a closing }. The line is built from its own pieces and nothing else, so one piece is one button and pressing it decides nothing; measured 2026-10-27, 194 of the 2820 lines these quizzes could leave out were a lone }, in 35 lessons. A program with no line of two pieces keeps its lines of one, so there is always a line to ask.";
  let indices = list_to_indices(lines);
  function index_code_is(index) {
    let line = list_get(lines, index);
    let code_is = text_starts_with_not(line, "//");
    return code_is;
  }
  let code = list_filter(indices, index_code_is);
  function index_pieces_is(index) {
    let line = list_get(lines, index);
    let tokens = app_code_quiz_tokens(line);
    let pieces = list_unique(tokens);
    let a = list_size(pieces);
    let several = greater_than(a, 1);
    return several;
  }
  let kept = list_filter(code, index_pieces_is);
  if (list_empty_is(kept)) {
    return code;
  }
  return kept;
}
