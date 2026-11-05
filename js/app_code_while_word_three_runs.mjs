import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_word_three_runs_example } from "./app_code_word_three_runs_example.mjs";
import { app_code_word_three_runs_walk } from "./app_code_word_three_runs_walk.mjs";
export function app_code_while_word_three_runs(
  box,
  lines,
  word,
  comparison_symbol,
  start,
  step,
) {
  arguments_assert(arguments, 6);
  ("A program that writes out one word three times, what it writes out, and each of its runs told in turn. Shared by the lessons where a while repeats a word, whichever way n counts.");
  app_code_word_three_runs_example(box, lines, word);
  app_code_word_three_runs_walk(box, word, comparison_symbol, start, step);
}
