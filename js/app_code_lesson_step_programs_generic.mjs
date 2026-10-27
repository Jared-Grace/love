import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_div_cycle_code } from "./app_code_div_cycle_code.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_if_blocks_kept } from "./app_code_if_blocks_kept.mjs";
import { app_shared_success_message } from "./app_shared_success_message.mjs";
import { html_div_first } from "./html_div_first.mjs";
import { html_flex_column_stretch } from "./html_flex_column_stretch.mjs";
import { app_code_head_spaced_above_code } from "./app_code_head_spaced_above_code.mjs";
import { app_code_program_step_through_generic } from "./app_code_program_step_through_generic.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { app_code_lesson_quiz_question_none } from "./app_code_lesson_quiz_question_none.mjs";
import { app_code_brace_marked_div } from "./app_code_brace_marked_div.mjs";
import { app_code_lesson_quizzes_generic } from "./app_code_lesson_quizzes_generic.mjs";
import { app_code_program_step_correction } from "./app_code_program_step_correction.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
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
    let box = app_code_container_light_blue(root);
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
  let batch = app_code_batch_question_answer_fns(
    programs,
    app_code_if_blocks_kept,
  );
  function example_choose(component, text, container) {
    "a worked example answered on the page, with nothing to tell the lesson when an answer is wrong";
    function wrong() {}
    ("the worked example has no answer to show, so a press done is told to nobody");
    function step_none() {}
    function success() {
      app_shared_success_message(component);
    }
    ("the guide stands on top of the card, above its Code: label, at the human's asking 2026-10-14");
    let guide = html_div_first(container);
    ("spaced as the order lesson's guide is, at the human's asking 2026-10-14: one sentence per line, no room between the lines, and the app's gap under the last one, above the Code label. Not picked: the gap the questions under the program have between them, which read as the sentences not belonging together");
    html_flex_column_stretch(guide);
    app_code_head_spaced_above_code(guide);
    app_code_program_step_through_generic(
      component,
      text,
      wrong,
      success,
      guide,
      step_none,
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
    ("the answer shown is the list of presses, so what is handed to it is how many of them are done, and it is drawn again with each one; 2026-10-23, at the human's asking, so the steps pressed turn green and the next one glows");
    let pressed = {
      done: 0,
      look_here: null,
    };
    function on_step() {
      property_set(pressed, "done", property_get(pressed, "done") + 1);
      correction_code_set(pressed);
    }
    let stepping = app_code_program_step_through_generic(
      parent,
      question,
      on_wrong,
      on_success,
      null,
      on_step,
    );
    ("the step-through hands back how to point at its choice only once it is drawn, so the answer is drawn after it");
    let value = property_get(stepping, "look_here");
    property_set(pressed, "look_here", value);
    correction_code_set(pressed);
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
        correction: app_code_program_step_correction,
      },
    ],
  });
  let name_id = app_code_lesson_statement_title_name_id(title, title_code);
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
