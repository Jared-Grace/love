import { arguments_assert } from "./arguments_assert.mjs";
import { object_multiply } from "./object_multiply.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
export function app_code_word_three_runs_example(box, lines, word) {
  arguments_assert(arguments, 3);
  ("A program that writes out one word three times, and what it writes out.");
  let words = object_multiply(word, 3);
  let written = list_join_newline(words);
  app_code_code_lines_writes_out(box, lines, written);
}
