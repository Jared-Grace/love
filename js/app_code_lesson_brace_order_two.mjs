import { app_code_braces_two_batch } from "./app_code_braces_two_batch.mjs";
import { app_code_braces_two_ifs } from "./app_code_braces_two_ifs.mjs";
import { app_code_braces_two_if_else } from "./app_code_braces_two_if_else.mjs";
import { app_code_braces_two_nested } from "./app_code_braces_two_nested.mjs";
import { app_code_braces_colors_random } from "./app_code_braces_colors_random.mjs";
import { app_code_braces_paired_with_order_colors } from "./app_code_braces_paired_with_order_colors.mjs";
import { app_code_div_braces_painted } from "./app_code_div_braces_painted.mjs";
import { app_code_braces_painter_shared } from "./app_code_braces_painter_shared.mjs";
import { html_div } from "./html_div.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_get } from "./list_get.mjs";
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
export function app_code_lesson_brace_order_two() {
  arguments_assert(arguments, 0);
  ("the order of two pairs of braces: only the braces of a program, written down in the order they stand. An if inside an if gives { { } }, and one if after another gives { } { }");
  ("Asked for by the human 2026-10-10, as an easier step before The order of the braces, which has three pairs in every program.");
  ("Placed straight after Which brace pairs with which and straight before The order of the braces, so writing braces out in order is first met with the fewest pairs it can be met with.");
  ("Two pairs can stand in only two orders, { } { } and { { } }, so the only quiz is writing the braces out, where a guess is not right half the time. A quiz choosing the braces of the code would offer two buttons, and a quiz choosing the code of the braces would have two right buttons whenever an if and else stood beside two ifs, since both are { } { }. Both are left to the lesson with three pairs.");
  ("The writing is a first draft by Claude 2026-10-10.");
  let batch = app_code_batch_question_answer_fns(
    app_code_braces_two_batch,
    app_code_braces_sequence,
  );
  function above(root, context) {
    "the pairing remembered, then the braces written out in order, easiest first as the human asked 2026-10-10: two ifs one after the other, an if and its else, and last an if inside an if, whose braces are named one by one in the colours they wear";
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
      "Here one ",
      "if",
      " comes after the other. Each ",
      "{ }",
      " has a colour of its own. Under the code are only its braces, in the order they stand:",
    ]);
    let colors_two = app_code_braces_colors_random();
    let first_two = list_get(colors_two, 0);
    let second_two = list_get(colors_two, 1);
    let t = app_code_braces_two_ifs();
    app_code_braces_paired_with_order_colors(box_two, t, colors_two);
    app_code_div_braces_painted(box_two, [
      ["The first ", "if", " ends with "],
      {
        brace: right,
        color: first_two,
      },
      [" before the second ", "if", " begins with "],
      {
        brace: left,
        color: second_two,
      },
    ]);
    let box_three = app_code_container_light_blue(root);
    html_div_cycle_code(box_three, [
      "An ",
      "if",
      " and its ",
      "else",
      " are one after the other too:",
    ]);
    let e = app_code_braces_two_if_else();
    app_code_braces_paired_with_order(box_three, e);
    let box_four = app_code_container_light_blue(root);
    html_div_cycle_code(box_four, ["Here one ", "if", " is inside the other:"]);
    let colors = app_code_braces_colors_random();
    let outer = list_get(colors, 0);
    let inner = list_get(colors, 1);
    let left_outer = {
      brace: left,
      color: outer,
    };
    let left_inner = {
      brace: left,
      color: inner,
    };
    let right_outer = {
      brace: right,
      color: outer,
    };
    let right_inner = {
      brace: right,
      color: inner,
    };
    let n = app_code_braces_two_nested();
    app_code_braces_paired_with_order_colors(box_four, n, colors);
    app_code_div_braces_painted(box_four, [
      ["There are two ", left, ": "],
      left_outer,
      [" and "],
      left_inner,
    ]);
    app_code_div_braces_painted(box_four, [
      left_outer,
      [" is the first ", left],
    ]);
    app_code_div_braces_painted(box_four, [
      left_inner,
      [" is the second ", left],
    ]);
    app_code_div_braces_painted(box_four, [
      ["There are two ", right, ": "],
      right_inner,
      [" and "],
      right_outer,
    ]);
    app_code_div_braces_painted(box_four, [
      right_inner,
      [" is the first ", right],
    ]);
    app_code_div_braces_painted(box_four, [
      right_outer,
      [" is the second ", right],
    ]);
    html_div_cycle_code(box_four, [
      "There is an ",
      "if",
      " inside another ",
      "if",
    ]);
    app_code_div_braces_painted(box_four, [
      ["The outer ", "if", " is coloured with "],
      left_outer,
      [" "],
      right_outer,
    ]);
    app_code_div_braces_painted(box_four, [
      ["The inner ", "if", " is coloured with "],
      left_inner,
      [" "],
      right_inner,
    ]);
    app_code_div_braces_painted(box_four, [
      ["Because the inner ", "if", " is inside the outer ", "if", ", the "],
      left_inner,
      [" is before the "],
      right_outer,
    ]);
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
  let painter = app_code_braces_painter_shared();
  function braces_div(container, text) {
    "the braces of a worked example, in the colours its code wears";
    let div = html_div(container);
    painter(div, text);
  }
  let lesson = app_code_lesson_base(
    name_id,
    above,
    2,
    batch,
    painter,
    "Its braces:",
    quizzes_get,
    question_label,
    braces_div,
  );
  return lesson;
}
