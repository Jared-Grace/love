import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_decoy_code_words } from "./app_code_lesson_decoy_code_words.mjs";
import { app_code_lesson_decoy_code_names } from "./app_code_lesson_decoy_code_names.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
export function app_code_lesson_decoy_code_pieces(question, answer) {
  arguments_assert(arguments, 2);
  ("the wrong answers for a program that gives names to words, made only of what that program holds: the other words written in it, its names, the word that comes out with its quote marks still on, and that word twice");
  ("Only as many of these are used as there are places for wrong answers, so they are in the order they are worth: another word in the code is a real reading of the program, a name is the mistake of writing out the name rather than what it holds, and the quote marks and the second copy fill what is left.");
  ("The places are filled here rather than left to the draw, because a wrong answer drawn from another question carries a word this program does not hold, and a learner can throw that one out without reading anything.");
  let words = app_code_lesson_decoy_code_words(question, answer);
  let names = app_code_lesson_decoy_code_names(question, answer);
  let word = eval_console_log_lines(question);
  let quoted = app_code_string_code(word);
  let twice = list_join_newline([word, word]);
  let found = list_concat_multiple([words, names, [quoted, twice]]);
  return found;
}
