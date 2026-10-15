import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_braces_run_programs_shape } from "./app_code_braces_run_programs_shape.mjs";
import { app_code_lesson_step_programs_generic } from "./app_code_lesson_step_programs_generic.mjs";
export function app_code_lesson_braces_step_generic(title, code_get, names) {
  arguments_assert(arguments, 3);
  ("a lesson on running a program a line at a time, in programs of one shape, code_get's, whose ifs ask names: the learner picks the next line to run, says what it does - evaluate, assign, log, or done - and does it, until they say the program is complete");
  ("Asked for by the human 2026-10-13 as its own lesson, between Does this section run? and the lesson that asks what such a program logs: every step of the computing done by the learner before being asked for the output. Not picked: a second quiz inside Does this section run?, built first the same day and moved here at the human's asking.");
  ("The programs are the same ones Does this section run? asks about, so the learner meets each shape the same way three times: which sections run, then every step, then only the output.");
  function programs() {
    let list = app_code_braces_run_programs_shape(code_get, names);
    return list;
  }
  let lesson = app_code_lesson_step_programs_generic(
    title,
    "{ ... }",
    programs,
  );
  return lesson;
}
