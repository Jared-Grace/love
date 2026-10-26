import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { app_code_lesson_step_programs_generic } from "./app_code_lesson_step_programs_generic.mjs";
export function app_code_lesson_step_of_lesson_generic(
  title,
  title_code,
  lesson_get,
) {
  arguments_assert(arguments, 3);
  ("a lesson on running a program a line at a time, over the programs another lesson, lesson_get's, asks about: each question that lesson asks is a program, and here the learner runs it step by step");
  ("Asked for by the human 2026-10-15: the lessons before already ramp up, so the step lessons reuse their programs and come straight after each one. Not picked: new lessons built only to ramp up, a single log, then a name and a log, then a name, an if and a log.");
  function programs() {
    let lesson_inner = lesson_get();
    let batch_get = property_get(lesson_inner, "batch");
    let list = [];
    for (let qa of batch_get()) {
      let question = property_get(qa, "question");
      list_add(list, question);
    }
    return list;
  }
  let lesson = app_code_lesson_step_programs_generic(
    title,
    title_code,
    programs,
  );
  return lesson;
}
