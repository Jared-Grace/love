import { arguments_assert } from "./arguments_assert.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_get } from "./list_get.mjs";
import { js_code_let_json_statement } from "./js_code_let_json_statement.mjs";
import { app_code_word_console_log_statement } from "./app_code_word_console_log_statement.mjs";
import { js_code_if_lines_multiple } from "./js_code_if_lines_multiple.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_if_two_bounds } from "./app_code_lesson_if_two_bounds.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { js_code_if_dots } from "./js_code_if_dots.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_if_ab_logged } from "./app_code_lesson_if_ab_logged.mjs";
export function app_code_lesson_if_nested() {
  arguments_assert(arguments, 0);
  ('an if inside an if: let a = true; let b = false; if (a) { console.log("love"); if (b) { console.log("joy"); } } console.log("peace"); writes out love and peace');
  ("The one new fact is that an if can sit inside another, and is only reached when the outer one runs. So the inner part runs only when both names are true, and a true inner name does nothing when the outer is false.");
  ("Asked for by the human 2026-10-08, as the second of the lessons before while, and the first of the nesting shapes they listed: if ( if ).");
  ("Three ways, as in Two ifs, one name: all three words, the outer word and the last, and the last alone. The last line sits outside both ifs so that every program writes out something, since a program that writes out nothing has no answer to press.");
  ("The four programs are a and b each true or false. a false and b true is kept, since it is the one that shows the inner part is never reached.");
  ("Reading forwards, the wrong answers offered are what the other two ways write out, as in Two ifs, one name. Not picked: the inner word and the last without the outer word, the mistake of reading the inner if as standing alone, since it would make the count of answers differ between programs.");
  ("Reading backwards, the wrong program changes one name so that it writes out something else: b when a is true, a when a is false.");
  ("The last box names a && b, taught long before as an expression. Not picked: a lesson rewriting one shape into the other, left for later if wanted.");
  ("The writing is a first draft by Claude 2026-10-08.");
  let fruits = fruits_of_the_spirit();
  function program_lines(values, words) {
    "let a = first value; let b = second value; if (a) { console.log(first word); if (b) { console.log(second word); } } console.log(third word);";
    let value_a = list_get(values, 0);
    let setup_a = js_code_let_json_statement("a", value_a);
    let value_b = list_get(values, 1);
    let setup_b = js_code_let_json_statement("b", value_b);
    let item = list_get(words, 0);
    let statement = app_code_word_console_log_statement(item);
    let item2 = list_get(words, 1);
    let statement3 = app_code_word_console_log_statement(item2);
    let inner = js_code_if_lines_multiple("b", [statement3]);
    let outer_insides = list_concat([statement], inner);
    let outer = js_code_if_lines_multiple("a", outer_insides);
    let item3 = list_get(words, 2);
    let statement4 = app_code_word_console_log_statement(item3);
    let lines = list_concat_multiple([[setup_a, setup_b], outer, [statement4]]);
    return lines;
  }
  function above(root, context) {
    "two ifs remembered, then an if inside an if three ways, then a && b";
    let love = list_get(fruits, 0);
    let joy = list_get(fruits, 1);
    let peace = list_get(fruits, 2);
    let words4 = [love, joy, peace];
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_if_two_bounds,
      ["Two ", "if", "s ask two questions, one after the other"],
    );
    let box_two = app_code_container_light_blue(root);
    html_div_cycle_code(box_two, [
      "An ",
      "if",
      " can go inside an ",
      "if",
      ":",
    ]);
    let all_lines = program_lines([true, true], words4);
    let all_written = list_join_newline(words4);
    app_code_code_lines_writes_out(box_two, all_lines, all_written);
    let say_love = app_code_word_console_log_statement(love);
    let say_joy = app_code_word_console_log_statement(joy);
    let say_peace = app_code_word_console_log_statement(peace);
    let if_a = js_code_if_dots("a");
    let if_b = js_code_if_dots("b");
    html_div_cycle_code(box_two, [
      "",
      "a",
      " is ",
      "true",
      ", so the lines inside ",
      if_a,
      " run",
    ]);
    html_div_cycle_code(box_two, [
      "",
      "b",
      " is ",
      "true",
      ", so ",
      say_joy,
      " inside ",
      if_b,
      " runs too",
    ]);
    html_div_cycle_code(box_two, [
      "",
      say_peace,
      " is outside ",
      if_a,
      ", so ",
      say_peace,
      " always runs",
    ]);
    let box_three = app_code_container_light_blue(root);
    html_div_cycle_code(box_three, ["But suppose ", "b", " is ", "false", ":"]);
    let outer_lines = program_lines([true, false], words4);
    let outer_written = list_join_newline([love, peace]);
    app_code_code_lines_writes_out(box_three, outer_lines, outer_written);
    html_div_cycle_code(box_three, [
      "",
      "a",
      " is ",
      "true",
      ", so ",
      say_love,
      " runs",
    ]);
    html_div_cycle_code(box_three, [
      "",
      "b",
      " is ",
      "false",
      ", so ",
      say_joy,
      " does not run",
    ]);
    let box_four = app_code_container_light_blue(root);
    html_div_cycle_code(box_four, ["And suppose ", "a", " is ", "false", ":"]);
    let none_lines = program_lines([false, true], words4);
    app_code_code_lines_writes_out(box_four, none_lines, peace);
    html_div_cycle_code(box_four, [
      "",
      "a",
      " is ",
      "false",
      ", so no line inside ",
      if_a,
      " runs",
    ]);
    html_div_cycle_code(box_four, [
      "",
      if_b,
      " is inside ",
      if_a,
      ", so ",
      if_b,
      " is never reached, even though ",
      "b",
      " is ",
      "true",
    ]);
    let box_five = app_code_container_light_blue(root);
    html_div_cycle_code(box_five, [
      "So ",
      say_joy,
      " runs only when ",
      "a && b",
      " is ",
      "true",
    ]);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "If inside an if",
    "if (a) { if (b) { ... } }",
  );
  let lesson = app_code_lesson_if_ab_logged(
    fruits,
    program_lines,
    3,
    true,
    above,
    name_id,
  );
  return lesson;
}
