import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { app_code_lesson_statement_name_sum_number_pairs } from "./app_code_lesson_statement_name_sum_number_pairs.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_assign_statement } from "./js_code_assign_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map } from "./list_map.mjs";
export function app_code_lesson_statement_name_itself_sum_batch() {
  arguments_assert(arguments, 0);
  ("the four programs a screen of this lesson asks about: each gives two numbers two names, gives the first name what the two add up to, and writes the first one out");
  ("The same four pairs of numbers the two lessons before this one ask about, because all three differ in one line and not in their arithmetic. A learner who has just worked these four sums out twice meets them a third time with the total written back into a name they already read, so the only thing that can be new in the answer is the line this lesson changed.");
  ("So the three wrong answers a question offers are the other three questions' answers. Nothing has to be invented to fill the buttons, and every wrong answer is a total that some sum on this lesson really does come to.");
  ("The first name is the one written back into, not the second. Whichever of the two it is, the line reads a name and fills the same name; the first is the one every screen of this course reaches for when it wants one name, and the second is what the screen with two cups on it added.");
  ("The number thrown away is the one the first name was given, and the line that throws it away is the one the question turns on. A learner who reads the last line, finds the first line that filled that name, and answers with the number written there gets a number that is not the answer - which is what makes the wrong reading show up as a wrong answer rather than as a right one.");
  let name_first = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  let plus = js_operator_plus_symbol();
  let pairs = app_code_lesson_statement_name_sum_number_pairs();
  function program_of(pair) {
    "the four lines that give two numbers two names, give the first name what the two add up to, and write out what the first one holds now";
    let first = list_first(pair);
    let last = list_last(pair);
    let held_first = js_code_let_statement(name_first, first);
    let held_last = js_code_let_statement(name_last, last);
    let summed = js_code_binary_spaced_nb(name_first, plus, name_last);
    let grown = js_code_assign_statement(name_first, summed);
    let logged = js_code_console_log_statement(name_first);
    let lines = [held_first, held_last, grown, logged];
    let code = list_join_newline(lines);
    return code;
  }
  let codes = list_map(pairs, program_of);
  return codes;
}
