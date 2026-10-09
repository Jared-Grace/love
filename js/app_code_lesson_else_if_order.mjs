import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { list_first } from "./list_first.mjs";
import { js_code_let_json_statement } from "./js_code_let_json_statement.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_word_console_log_statement } from "./app_code_word_console_log_statement.mjs";
import { js_code_if_else_if_else_lines_multiple } from "./js_code_if_else_if_else_lines_multiple.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { js_code_else_if_dots } from "./js_code_else_if_dots.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_else_if_else } from "./app_code_lesson_else_if_else.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_cases_logged } from "./app_code_lesson_cases_logged.mjs";
export function app_code_lesson_else_if_order() {
  arguments_assert(arguments, 0);
  ('else if with comparisons: let n = 5; if (n < 10) { console.log("love"); } else if (n < 100) { console.log("joy"); } else { console.log("peace"); } console.log("patience"); writes out love and patience, though n < 100 is true too');
  ("The one new fact is that the checks are asked in order and the first one that is true wins: with n = 5 both n < 10 and n < 100 are true, and only the lines inside if (n < 10) { ... } run. The program is the one from Else if and else with its names a and b replaced by comparisons of one number n.");
  ("Recommended by Claude 2026-10-09 as the step after Else if and else, and chosen by the human.");
  ("Each screen has a number below 10, a number from 10 to 99, a number 100 or more, and one more drawn from any of the three. Numbers are picked so none sits at a boundary, since 10 and 100 are where reading less than as less than or equal would go wrong unseen, and that is a lesson of its own.");
  ("Reading forwards, the wrong answers offered are what the same program writes out for the other numbers, each once. Reading backwards, the wrong program changes n to a number from the next range up, and a number 100 or more to one below 10.");
  ("The writing is a first draft by Claude 2026-10-09.");
  let less = js_operator_less_than_symbol();
  let fruits = fruits_of_the_spirit();
  let smalls = [2, 3, 5, 7];
  let middles = [20, 35, 50, 80];
  let bigs = [200, 350, 500, 800];
  function compared(left, right) {
    "left < right, spaced the way the course spells it";
    let c = js_code_binary_spaced_nb(left, less, right);
    return c;
  }
  let first_check = compared("n", 10);
  let second_check = compared("n", 100);
  function program_lines(values, words) {
    "let n = the value; if (n < 10) { first word } else if (n < 100) { second word } else { third word } and then the fourth word";
    let value = list_first(values);
    let setup = js_code_let_json_statement("n", value);
    let item = list_get(words, 0);
    let statement = app_code_word_console_log_statement(item);
    let item2 = list_get(words, 1);
    let statement2 = app_code_word_console_log_statement(item2);
    let item3 = list_get(words, 2);
    let statement3 = app_code_word_console_log_statement(item3);
    let chain = js_code_if_else_if_else_lines_multiple(
      first_check,
      [statement],
      second_check,
      [statement2],
      [statement3],
    );
    let item4 = list_get(words, 3);
    let statement4 = app_code_word_console_log_statement(item4);
    let lines = list_concat_multiple([[setup], chain, [statement4]]);
    return lines;
  }
  function cases_get() {
    "one number from each range, and one more from any of them";
    let small = list_random_item(smalls);
    let middle = list_random_item(middles);
    let big = list_random_item(bigs);
    let all = list_concat_multiple([smalls, middles, bigs]);
    let extra = list_random_item(all);
    let cases = [[small], [middle], [big], [extra]];
    return cases;
  }
  function values_changed(values) {
    "n moved to the next range up, and a number 100 or more moved below 10";
    let value2 = list_first(values);
    if (less_than(value2, 10)) {
      let up = list_random_item(middles);
      let r = [up];
      return r;
    }
    if (less_than(value2, 100)) {
      let up2 = list_random_item(bigs);
      let r2 = [up2];
      return r2;
    }
    let down = list_random_item(smalls);
    let r3 = [down];
    return r3;
  }
  function above(root, context) {
    "else if and else remembered, then its names replaced by checks of n, three ways";
    let love = list_get(fruits, 0);
    let joy = list_get(fruits, 1);
    let peace = list_get(fruits, 2);
    let patience = list_get(fruits, 3);
    let words4 = [love, joy, peace, patience];
    let say_love = app_code_word_console_log_statement(love);
    let say_joy = app_code_word_console_log_statement(joy);
    let say_peace = app_code_word_console_log_statement(peace);
    let else_if_b = js_code_else_if_dots("b");
    let else_if_second = js_code_else_if_dots(second_check);
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_else_if_else,
      ["an ", else_if_b, " can have an ", "else", " after it"],
    );
    let box_two = app_code_container_light_blue(root);
    html_div_cycle_code(box_two, ["The checks can be comparisons:"]);
    let joy_lines = program_lines([50], words4);
    let joy_written = list_join_newline([joy, patience]);
    app_code_code_lines_writes_out(box_two, joy_lines, joy_written);
    let v = compared(50, 10);
    let v2 = compared(50, 100);
    html_div_cycle_code(box_two, [
      "",
      v,
      " is ",
      "false",
      " and ",
      v2,
      " is ",
      "true",
      ", so ",
      say_joy,
      " runs",
    ]);
    let box_three = app_code_container_light_blue(root);
    html_div_cycle_code(box_three, ["But suppose ", "n", " is ", "5", ":"]);
    let love_lines = program_lines([5], words4);
    let love_written = list_join_newline([love, patience]);
    app_code_code_lines_writes_out(box_three, love_lines, love_written);
    let v3 = compared(5, 10);
    html_div_cycle_code(box_three, [
      "",
      v3,
      " is ",
      "true",
      ", so ",
      say_love,
      " runs",
    ]);
    let v4 = compared(5, 100);
    html_div_cycle_code(box_three, [
      "",
      v4,
      " is ",
      "true",
      " too, but ",
      else_if_second,
      " is not reached",
    ]);
    html_div_cycle_code(box_three, [
      "The checks are asked in order, and the first one that is ",
      "true",
      " wins",
    ]);
    let box_four = app_code_container_light_blue(root);
    html_div_cycle_code(box_four, ["And suppose ", "n", " is ", "500", ":"]);
    let peace_lines = program_lines([500], words4);
    let peace_written = list_join_newline([peace, patience]);
    app_code_code_lines_writes_out(box_four, peace_lines, peace_written);
    html_div_cycle_code(box_four, [
      "Neither check is ",
      "true",
      ", so ",
      say_peace,
      " inside ",
      "else",
      " runs",
    ]);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "Else if in order",
    "else if (n < 100)",
  );
  let lesson = app_code_lesson_cases_logged(
    fruits,
    cases_get,
    program_lines,
    4,
    values_changed,
    above,
    name_id,
  );
  return lesson;
}
