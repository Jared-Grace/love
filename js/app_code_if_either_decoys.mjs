import { app_code_if_boolean_flipped } from "./app_code_if_boolean_flipped.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_first } from "./list_first.mjs";
import { text_includes } from "./text_includes.mjs";
import { not } from "./not.mjs";
export function app_code_if_either_decoys(question, answer) {
  "the wrong answers for a program whose first line sets a name to true or false and which then writes out one word when it is true and another when it is false: the other word, and both words in the order the program writes them";
  let flipped = app_code_if_boolean_flipped(question);
  let other = eval_console_log_lines(flipped);
  let both = list_join_newline([answer, other]);
  let lines = text_split_newline(question);
  let first = list_first(lines);
  let first_runs = text_includes(first, "true");
  if (not(first_runs)) {
    both = list_join_newline([other, answer]);
  }
  let found = [other, both];
  return found;
}
