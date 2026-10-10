import { arguments_assert } from "./arguments_assert.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_word_console_log_statement } from "./app_code_word_console_log_statement.mjs";
import { js_code_if_lines_multiple } from "./js_code_if_lines_multiple.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { js_code_if_else_lines_multiple } from "./js_code_if_else_lines_multiple.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_braces_sequence } from "./app_code_braces_sequence.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_brace_pair } from "./app_code_lesson_brace_pair.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_braces_paired_with_order } from "./app_code_braces_paired_with_order.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
import { app_code_code_dark_lines_braces_paired_random } from "./app_code_code_dark_lines_braces_paired_random.mjs";
import { app_code_lesson_quizzes_generic } from "./app_code_lesson_quizzes_generic.mjs";
import { app_code_lesson_quiz_braces_order } from "./app_code_lesson_quiz_braces_order.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
import { app_code_braces_paired_div } from "./app_code_braces_paired_div.mjs";
export function app_code_lesson_brace_order_two() {
  arguments_assert(arguments, 0);
  ("the order of two pairs of braces: only the braces of a program, written down in the order they stand. An if inside an if gives { { } }, and one if after another gives { } { }");
  ("Asked for by the human 2026-10-10, as an easier step before The order of the braces, which has three pairs in every program.");
  ("Placed straight after Which brace pairs with which and straight before The order of the braces, so writing braces out in order is first met with the fewest pairs it can be met with.");
  ("Two pairs can stand in only two orders, { } { } and { { } }, so the only quiz is writing the braces out, where a guess is not right half the time. A quiz choosing the braces of the code would offer two buttons, and a quiz choosing the code of the braces would have two right buttons whenever an if and else stood beside two ifs, since both are { } { }. Both are left to the lesson with three pairs.");
  ("The writing is a first draft by Claude 2026-10-10.");
  let fruits = fruits_of_the_spirit();
  let love = list_get(fruits, 0);
  let joy = list_get(fruits, 1);
  let say_love = app_code_word_console_log_statement(love);
  let say_joy = app_code_word_console_log_statement(joy);
  function nested() {
    let if_b = js_code_if_lines_multiple("b", [say_joy]);
    let statements = list_concat([say_love], if_b);
    let lines = js_code_if_lines_multiple("a", statements);
    let code = list_join_newline(lines);
    return code;
  }
  function two_ifs() {
    let if_a = js_code_if_lines_multiple("a", [say_love]);
    let if_b2 = js_code_if_lines_multiple("b", [say_joy]);
    let lines2 = list_concat(if_a, if_b2);
    let code2 = list_join_newline(lines2);
    return code2;
  }
  function if_else() {
    let lines3 = js_code_if_else_lines_multiple("a", [say_love], [say_joy]);
    let code3 = list_join_newline(lines3);
    return code3;
  }
  function batch_get() {
    "the three programs with two pairs of braces, in a random order";
    let n = nested();
    let t = two_ifs();
    let e = if_else();
    let codes = [n, t, e];
    list_shuffle(codes);
    return codes;
  }
  let batch = app_code_batch_question_answer_fns(
    batch_get,
    app_code_braces_sequence,
  );
  function above(root, context) {
    "the pairing remembered, then the braces of an if inside an if and of two ifs one after the other written out in order";
    let left = js_code_brace_left();
    let right = js_code_brace_right();
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_brace_pair,
      ["a ", left, " begins a section of code, and its ", right, " ends it."],
    );
    let box_two = app_code_container_light_blue(root);
    html_div_cycle_code(box_two, [
      "Here each ",
      "{ }",
      " has a colour of its own. Under the code are only its braces, in the order they stand:",
    ]);
    let n2 = nested();
    app_code_braces_paired_with_order(box_two, n2);
    html_div_cycle_code(box_two, [
      "The second ",
      left,
      " comes before the first ",
      right,
      ", because the second ",
      "if",
      " is inside the first",
    ]);
    let box_three = app_code_container_light_blue(root);
    html_div_cycle_code(box_three, [
      "Here one ",
      "if",
      " comes after the other:",
    ]);
    let t2 = two_ifs();
    app_code_braces_paired_with_order(box_three, t2);
    html_div_cycle_code(box_three, [
      "The first ",
      right,
      " comes before the second ",
      left,
      ", because the first ",
      "if",
      " ends before the second begins",
    ]);
    html_div_cycle_code(box_three, [
      "An ",
      "if",
      " and its ",
      "else",
      " are one after the other too:",
    ]);
    let e2 = if_else();
    app_code_braces_paired_with_order(box_three, e2);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "The order of two pairs of braces",
    "{ { } }",
  );
  let question_label = "Code:";
  let forwards = {
    question_label,
    on_question: html_text_set_code_dark_lines,
    answer_label: "Which are its braces, in order?",
    answer_on_button: app_code_code_dark_lines_braces_paired_random,
    answer_count_override: null,
  };
  let quizzes_get = app_code_lesson_quizzes_generic({
    lines: false,
    forwards,
    backwards: forwards,
    backwards_code: false,
    backwards_include: false,
    forwards_include: false,
    batch_get: batch,
    forwards_code: true,
    unscramble_label: "Please write its braces in order:",
    unscramble_on_answer: app_code_lesson_quiz_braces_order,
  });
  let lesson = app_code_lesson_base(
    name_id,
    above,
    2,
    batch,
    html_text_set_code_dark_lines,
    "Its braces:",
    quizzes_get,
    question_label,
    app_code_braces_paired_div,
  );
  return lesson;
}
