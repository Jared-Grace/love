import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_braces_run_programs_shape } from "./app_code_braces_run_programs_shape.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_if_blocks_kept } from "./app_code_if_blocks_kept.mjs";
import { app_shared_success_message } from "./app_shared_success_message.mjs";
import { app_code_braces_run_choose } from "./app_code_braces_run_choose.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_quiz_question_none } from "./app_code_lesson_quiz_question_none.mjs";
import { app_code_brace_marked_div } from "./app_code_brace_marked_div.mjs";
import { app_code_lesson_quizzes_generic } from "./app_code_lesson_quizzes_generic.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
export function app_code_lesson_braces_run_explain_generic(
  title,
  explain,
  code_get,
  names,
) {
  arguments_assert(arguments, 4);
  ("a Does this section run? lesson whose explanation of the shape is drawn by explain(root, context), above the box on what happens to a section that runs and to one that does not; the rest is as ",
    fn_name("app_code_lesson_braces_run_generic"),
    " says");
  ("Made for If and else, whose shape already has a whole explanation in Else, at the human's asking 2026-10-11 that it appear here too.");
  function above(root, context) {
    "what is new about this shape, then what happens to a section that runs and to one that does not";
    "The box on sections last, straight before the worked example, at the human's asking 2026-10-11: it is the rule the example is answered by, so it sits where the answering begins.";
    explain(root, context);
    let box_steps = app_code_container_light_blue(root);
    html_div_cycle_code(box_steps, [
      "When a ",
      "{ ... }",
      " does not run, it is as if its lines were not there",
    ]);
    html_div_cycle_code(box_steps, [
      "When a ",
      "{ ... }",
      " runs, it is as if only its lines were there",
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
  return lesson;
}
