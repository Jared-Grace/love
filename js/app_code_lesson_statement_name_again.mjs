import { app_code_lesson_statement_name_again_pair } from "./app_code_lesson_statement_name_again_pair.mjs";
import { app_code_lesson_statement_name_pair_first } from "./app_code_lesson_statement_name_pair_first.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_lesson_statement_name_again() {
  arguments_assert(arguments, 0);
  ('one name given a value and then given another one: let a = "grapes"; console.log(a); a = "olives"; console.log(a); writes out grapes and then olives');
  ("The first screen where the order of the lines has to be noticed rather than merely followed. Every question before this one could be answered by finding the line that made the name and reading what it was handed; here that line is on the screen, it is the first thing a learner reaches for, and it is wrong.");
  ("So the word it was handed is a wrong answer on the buttons, put there by the batch on purpose. A learner who reads only the let line does not fail to find an answer - they find one, and it is marked wrong, which is what teaches them that a later line reached the name first.");
  ("The new line shape is the only new thing. One name still, the same one letter, values still words: what changed is that a name can be given a value without let, and only because it already has one.");
  ("Building the code from tokens stays switched off, for the reason the lessons before give.");
  let pair = app_code_lesson_statement_name_again_pair();
  let lesson = app_code_lesson_statement_name_pair_first(pair);
  return lesson;
}
