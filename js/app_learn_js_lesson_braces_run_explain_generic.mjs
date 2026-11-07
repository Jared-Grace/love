import { app_learn_js_braces_dots } from "./app_learn_js_braces_dots.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_braces_run_programs_shape } from "./app_learn_js_braces_run_programs_shape.mjs";
import { list_get } from "./list_get.mjs";
import { app_learn_js_braces_run_walkthrough } from "./app_learn_js_braces_run_walkthrough.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { app_learn_js_if_blocks_kept } from "./app_learn_js_if_blocks_kept.mjs";
import { app_shared_success_message } from "./app_shared_success_message.mjs";
import { app_learn_js_braces_run_choose } from "./app_learn_js_braces_run_choose.mjs";
import { app_learn_js_lesson_quiz_question_none } from "./app_learn_js_lesson_quiz_question_none.mjs";
import { app_learn_js_brace_marked_div } from "./app_learn_js_brace_marked_div.mjs";
import { app_code_lesson_quizzes_generic } from "./app_code_lesson_quizzes_generic.mjs";
import { app_learn_js_lesson_quiz_braces_run } from "./app_learn_js_lesson_quiz_braces_run.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_base } from "./app_learn_js_lesson_base.mjs";
export function app_learn_js_lesson_braces_run_explain_generic(
  title,
  explain,
  code_get,
  names,
) {
  arguments_assert(arguments, 4);
  ("a lesson on whether each section of code runs, in programs of one shape, code_get's, whose ifs ask names: each { ... } is coloured in turn and the learner says whether it runs; one that does not is swallowed, and one that runs loses the if around it, its lines moving out to where they now stand. The explanation of the shape is drawn by explain(root, context), above the box on what happens to a section that runs and to one that does not.");
  ("Asked for by the human 2026-10-11: one of these straight before the first lesson of every shape of ifs with two or three pairs of braces, that shape's lesson then asking what it writes out. So each of these is where its shape is first met and explained, and the lesson after remembers it.");
  ("There is one quiz, the same answering as the worked example, because the question - a program - and the answer - what runs of it - are the lesson's whole fact. The answer kept for a correction is the program as the steps leave it.");
  ("2026-10-11: the form that took a list of rules instead of an explanation was deleted once every lesson had moved to this one; its notes are the three above.");
  ("Made for If and else, whose shape already has a whole explanation in Else, at the human's asking 2026-10-11 that it appear here too.");
  ("2026-10-12: a lesson whose shape is explained in the lesson after hands over noop as explain, so its writing is the walkthrough alone; the two shapes of ifs one after another keep theirs, which say which may run and nothing of what is written out");
  function above(root, context) {
    "what is new about this shape, then what happens to a section that runs and to one that does not";
    "The box on sections last, straight before the worked example, at the human's asking 2026-10-11: it is the rule the example is answered by, so it sits where the answering begins.";
    explain(root, context);
    let box_steps = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_steps, [
      "When a ",
      app_learn_js_braces_dots(),
      " does not run, it is as if its lines were not there",
    ]);
    app_learn_js_div_cycle_code(box_steps, [
      "When a ",
      app_learn_js_braces_dots(),
      " runs, it is as if only its lines were there",
    ]);
    ("2026-10-12, at the human's asking: then one program of the shape answered section by section, so the writing explains the exercise asked. Its program is the first of a fresh four, so it goes a different way from one visit to the next, as the examples do.");
    let shown = app_learn_js_braces_run_programs_shape(code_get, names);
    let walked = list_get(shown, 0);
    app_learn_js_braces_run_walkthrough(root, walked);
  }
  function programs() {
    let list = app_learn_js_braces_run_programs_shape(code_get, names);
    return list;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    programs,
    app_learn_js_if_blocks_kept,
  );
  function example_choose(component, text, container) {
    "a worked example answered on the page, with nothing to tell the lesson when an answer is wrong";
    function wrong() {}
    function success() {
      app_shared_success_message(component);
    }
    app_learn_js_braces_run_choose(component, text, wrong, success);
  }
  let forwards = {
    question_label: "",
    on_question: app_learn_js_lesson_quiz_question_none,
    answer_label: "",
    answer_on_button: app_learn_js_brace_marked_div,
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
        on_question: app_learn_js_lesson_quiz_question_none,
        answer_label: "",
        on_answer: app_learn_js_lesson_quiz_braces_run,
      },
    ],
  });
  let name_id = app_code_lesson_statement_title_name_id(
    title,
    app_learn_js_braces_dots(),
  );
  let lesson = app_learn_js_lesson_base(
    name_id,
    above,
    1,
    batch,
    example_choose,
    null,
    quizzes_get,
    "Code:",
    app_learn_js_brace_marked_div,
  );
  return lesson;
}
