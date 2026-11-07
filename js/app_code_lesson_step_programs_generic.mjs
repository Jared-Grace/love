import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_code_div_cycle_code } from "./app_code_div_cycle_code.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { app_code_if_blocks_kept } from "./app_code_if_blocks_kept.mjs";
import { app_code_lesson_quiz_question_none } from "./app_code_lesson_quiz_question_none.mjs";
import { app_learn_js_brace_marked_div } from "./app_learn_js_brace_marked_div.mjs";
import { app_code_lesson_quiz_step_info } from "./app_code_lesson_quiz_step_info.mjs";
import { app_code_lesson_quizzes_generic } from "./app_code_lesson_quizzes_generic.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
import { app_code_lesson_example_guided } from "./app_code_lesson_example_guided.mjs";
import { property_set } from "./property_set.mjs";
export function app_code_lesson_step_programs_generic(
  title,
  title_code,
  programs,
) {
  arguments_assert(arguments, 3);
  ("a lesson on running a program a line at a time, over the programs programs returns: the learner picks the next line to run, says what it does - evaluate, assign, log, or done - and does it, until they say the program is complete");
  ("2026-10-15: taken out of the lesson on programs of one shape, so a lesson can step through another lesson's programs too");
  function above(root, context) {
    "what the learner does, in the order the questions come";
    let box = app_learn_js_container_light_blue(root);
    app_code_div_cycle_code(box, [
      "Run the program yourself, one line at a time, as the computer does",
    ]);
    ("2026-10-15: says the line you chose rather than that line, the pointing word the lesson-text gate looks for. Not picked: showing a line of code here, since the line is a different one at every step");
    app_code_div_cycle_code(box, [
      "First choose the next line to run. Then say what the line you chose does, and do it",
    ]);
    app_code_div_cycle_code(box, [
      "When no line is left to run, choose: The program is complete",
    ]);
  }
  let batch = app_learn_js_batch_question_answer_fns(
    programs,
    app_code_if_blocks_kept,
  );
  let forwards = {
    question_label: "",
    on_question: app_code_lesson_quiz_question_none,
    answer_label: "",
    answer_on_button: app_learn_js_brace_marked_div,
    answer_count_override: null,
  };
  let info = app_code_lesson_quiz_step_info();
  let quizzes_get = app_code_lesson_quizzes_generic({
    lines: false,
    forwards,
    backwards: forwards,
    backwards_code: false,
    backwards_include: false,
    forwards_include: false,
    batch_get: batch,
    forwards_code: false,
    builds_more: [info],
  });
  let name_id = app_code_lesson_statement_title_name_id(title, title_code);
  let lesson = app_code_lesson_base(
    name_id,
    above,
    1,
    batch,
    app_code_lesson_example_guided,
    null,
    quizzes_get,
    "Code:",
    app_learn_js_brace_marked_div,
  );
  ("the example guides step by step and the quiz does not, at the human's asking 2026-10-14");
  property_set(lesson, "examples_guided", true);
  return lesson;
}
