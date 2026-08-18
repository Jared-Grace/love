import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { list_get } from "./list_get.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map_index } from "./list_map_index.mjs";
export function app_code_lesson_statement_name_compare_batch() {
  arguments_assert(arguments, 0);
  ("the four programs a screen of this lesson asks about: each gives two numbers two names, then asks whether the first name holds the smaller of the two");
  ("Two of the four come out true and two come out false, and which two is drawn rather than fixed. Only two answers exist here, so a batch that let the draw fall where it liked could hand a learner four programs that all answer the same way - and a learner who answered every question with the same word would be right every time without having read a line.");
  ("The two numbers of a pair are far apart on purpose. Which of two numbers is smaller is not what this lesson is teaching, so a pair a learner has to stop and think about is asking them a second question while they are working out the first.");
  ("No pair holds the same number twice. Two equal numbers make the answer false, which is true and is the one comparison a learner has to be told about rather than shown - it is a lesson of its own in the Operators category, and meeting it here as one program out of four would look like an ordinary case rather than the thing to remember.");
  ("The order the two numbers are written in is what settles the answer, and the pair itself is drawn separately from that order. So the same numbers can appear on a screen answering either way, and nothing about the numbers a program shows says which way it will answer.");
  let name_first = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  let smaller_than = js_operator_less_than_symbol();
  let pairs = list_shuffle_take(
    [
      [2, 9],
      [3, 8],
      [1, 7],
      [4, 10],
      [5, 12],
    ],
    4,
  );
  let smaller_firsts = list_shuffle_take([true, true, false, false], 4);
  function program_of(pair, index) {
    "the three lines that give two numbers two names and write out whether the first name holds the smaller one";
    let smaller = list_first(pair);
    let larger = list_last(pair);
    let smaller_first = list_get(smaller_firsts, index);
    let first = larger;
    let last = smaller;
    if (smaller_first) {
      first = smaller;
      last = larger;
    }
    let held_first = js_code_let_statement(name_first, first);
    let held_last = js_code_let_statement(name_last, last);
    let compared = js_code_binary_spaced_nb(
      name_first,
      smaller_than,
      name_last,
    );
    let logged = js_code_console_log_statement(compared);
    let lines = [held_first, held_last, logged];
    let code = list_join_newline(lines);
    return code;
  }
  let codes = list_map_index(pairs, program_of);
  return codes;
}
