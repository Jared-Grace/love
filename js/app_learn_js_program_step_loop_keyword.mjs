import { arguments_assert } from "./arguments_assert.mjs";
import { list_get } from "./list_get.mjs";
import { text_trim } from "./text_trim.mjs";
import { js_keyword_while } from "./js_keyword_while.mjs";
export function app_learn_js_program_step_loop_keyword(lines, line) {
  arguments_assert(arguments, 2);
  ("the word a loop line starts with, while or for, so what is said about a loop names the loop the learner is looking at: lines is the program's lines, and line the loop's own line");
  ("2026-11-01, for the first for lesson: a for with only its condition runs as a while does, so the step words are the same apart from this word. Read off the line rather than handed down from the trace, because every place that speaks about a loop already holds the loop's line, and the line is what the learner sees. Not picked: separate words for for, which would say the same thing twice");
  let message = list_get(lines, line);
  let text = text_trim(message);
  let keyword = "for";
  let k = js_keyword_while();
  if (text.startsWith(k)) {
    keyword = js_keyword_while();
  }
  return keyword;
}
