import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_braces_run_programs_shape } from "./app_code_braces_run_programs_shape.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_if_blocks_kept } from "./app_code_if_blocks_kept.mjs";
import { app_shared_success_message } from "./app_shared_success_message.mjs";
import { app_code_program_step_through_generic } from "./app_code_program_step_through_generic.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_quiz_question_none } from "./app_code_lesson_quiz_question_none.mjs";
import { app_code_brace_marked_div } from "./app_code_brace_marked_div.mjs";
import { app_code_lesson_quizzes_generic } from "./app_code_lesson_quizzes_generic.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
import { property_set } from "./property_set.mjs";
export function app_code_lesson_braces_step_generic(title, code_get, names) {
  arguments_assert(arguments, 3);
  ("a lesson on running a program a line at a time, in programs of one shape, code_get's, whose ifs ask names: the learner picks the next line to run, says what it does - evaluate, assign, log, or done - and does it, until they say the program is complete");
  ("Asked for by the human 2026-10-13 as its own lesson, between Does this section run? and the lesson that asks what such a program logs: every step of the computing done by the learner before being asked for the output. Not picked: a second quiz inside Does this section run?, built first the same day and moved here at the human's asking.");
  ("The programs are the same ones Does this section run? asks about, so the learner meets each shape the same way three times: which sections run, then every step, then only the output.");
  function above(root, context) {
    "what the learner does, in the order the questions come";
    let box = app_code_container_light_blue(root);
    html_div_cycle_code(box, [
      "Run the program yourself, one line at a time, as the computer does",
    ]);
    html_div_cycle_code(box, [
      "First choose the next line to run. Then say what that line does, and do it",
    ]);
    html_div_cycle_code(box, [
      "When no line is left to run, choose: The program is complete",
    ]);
  }
  function programs() {
    let list = app_code_braces_run_programs_shape(code_get, names);
    return list;
  }
  let batch = app_code_batch_question_answer_fns(
    programs,
    app_code_if_blocks_kept,
  );
  function example_choose(component, text, container) {
    "a worked example answered on the page, with nothing to tell the lesson when an answer is wrong";
    function wrong() {}
    function success() {
      app_shared_success_message(component);
    }
    app_code_program_step_through_generic(
      component,
      text,
      wrong,
      success,
      true,
    );
  }
  function step_quiz(
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
    app_code_program_step_through_generic(
      parent,
      question,
      on_wrong,
      on_success,
      false,
    );
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
        on_answer: step_quiz,
      },
    ],
  });
  let name_id = app_code_lesson_statement_title_name_id(title, "{ ... }");
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
  ("the example guides step by step and the quiz does not, at the human's asking 2026-10-14");
  property_set(lesson, "examples_guided", true);
  return lesson;
}
