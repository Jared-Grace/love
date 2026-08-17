import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary } from "./js_code_binary.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map_index } from "./list_map_index.mjs";
export function app_code_lesson_statement_name_sum_batch() {
  arguments_assert(arguments, 0);
  ("the four programs a screen of this lesson asks about: each gives two numbers two names, then writes out what those two names add up to");
  ("The four totals are picked first and the two numbers worked back out of each, which is what keeps the four answers different from one another. Picked the other way round - two numbers each time and the total left to fall where it may - two programs could land on the same answer, and a question would be offering the right answer twice.");
  ("So the three wrong answers a question offers are the other three questions' answers. Nothing has to be invented to fill the buttons, and every wrong answer is a total that some sum on this lesson really does come to.");
  ("Every total is odd, which is what stops the two numbers of a program ever being the same as each other. Given the same number twice a learner could reach the answer while reading only one of the two names, and reading both is the whole of what this lesson asks.");
  ("The first number walks up by one from program to program rather than being picked. It is what makes the pair different each time without a second draw, and it keeps the first number away from the total, which a learner is looking at in the buttons.");
  let name_first = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  let plus = js_operator_plus_symbol();
  let totals = list_shuffle_take([7, 9, 11, 13, 15], 4);
  function program_of(total, index) {
    "the three lines that give two numbers two names and write out what the two names add up to";
    let first = add(2, index);
    let last = subtract(total, first);
    let held_first = js_code_let_statement(name_first, first);
    let held_last = js_code_let_statement(name_last, last);
    let summed = js_code_binary(name_first, plus, name_last);
    let logged = js_code_console_log_statement(summed);
    let lines = [held_first, held_last, logged];
    let code = list_join_newline(lines);
    return code;
  }
  let codes = list_map_index(totals, program_of);
  return codes;
}
