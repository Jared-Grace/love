import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_if_nested } from "./app_code_lesson_if_nested.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_braces_run_programs } from "./app_code_braces_run_programs.mjs";
import { app_code_if_blocks_kept } from "./app_code_if_blocks_kept.mjs";
import { app_shared_success_message } from "./app_shared_success_message.mjs";
import { app_code_braces_run_choose } from "./app_code_braces_run_choose.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_quiz_question_none } from "./app_code_lesson_quiz_question_none.mjs";
import { app_code_brace_marked_div } from "./app_code_brace_marked_div.mjs";
import { app_code_lesson_quizzes_generic } from "./app_code_lesson_quizzes_generic.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
export function app_code_lesson_braces_run() {
  arguments_assert(arguments, 0);
  ("whether a section of code runs, in programs with two pairs of braces: each { ... } is coloured in turn and the learner says whether it runs; one that does not is swallowed - its lines fade and its braces close up - and an if with no else goes with it, as does an else whose if ran; asked for by the human 2026-10-11");
  ("Placed straight after If inside an if, the last of the lessons that the three programs here need: two ifs, an if and its else, and an if inside an if. Rejected: straight after the lessons on the lines between braces, where it would ask about the else before the else is taught.");
  ("There is one quiz, the same answering as the worked example, because the question - a program - and the answer - what runs of it - are the lesson's whole fact. The answer kept for a correction is the program as the swallowing leaves it.");
  ("The writing is a first draft by Claude 2026-10-11.");
  let left = js_code_brace_left();
  let right = js_code_brace_right();
  function above(root, context) {
    "an if inside an if remembered, then what happens to a section that does not run";
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(box_one, context, app_code_lesson_if_nested, [
      "the lines between an if's ",
      left,
      " and ",
      right,
      " run only when its test is true.",
    ]);
    let box_two = app_code_container_light_blue(root);
    html_div_cycle_code(box_two, [
      "When a ",
      "{ ... }",
      " does not run, it is as if its lines were not there",
    ]);
  }
  let batch = app_code_batch_question_answer_fns(
    app_code_braces_run_programs,
    app_code_if_blocks_kept,
  );
  function example_choose(component, text, container) {
    "a worked example answered on the page, with nothing to tell the lesson when an answer is wrong";
    function wrong() {}
    function success() {
      app_shared_success_message(component);
    }
    app_code_braces_run_choose(component, text, wrong, success);
  }
  function run_quiz(
    parent,
    info,
    qa,
    on_success,
    on_wrong,
    batch_get,
    correction_code_set,
  ) {
    "the quiz: the same answering as the worked example";
    let question = property_get(qa, "question");
    let answer = property_get(qa, "answer");
    correction_code_set(answer);
    app_code_braces_run_choose(parent, question, on_wrong, on_success);
  }
  let forwards = {
    question_label: "",
    on_question: app_code_lesson_quiz_question_none,
    answer_label: "",
    answer_on_button: app_code_brace_marked_div,
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
    forwards_code: false,
    builds_more: [
      {
        question_label: "",
        on_question: app_code_lesson_quiz_question_none,
        answer_label: "",
        on_answer: run_quiz,
      },
    ],
  });
  let name_id = app_code_lesson_statement_title_name_id(
    "Does this section run?",
    "{ ... }",
  );
  let lesson = app_code_lesson_base(
    name_id,
    above,
    1,
    batch,
    example_choose,
    null,
    quizzes_get,
    "Code:",
    app_code_brace_marked_div,
  );
  return lesson;
}
