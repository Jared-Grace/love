import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_step_of_lesson_generic } from "./app_code_lesson_step_of_lesson_generic.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export function app_code_lesson_step_before_lesson_generic(
  title,
  title_code,
  lesson_get,
) {
  arguments_assert(arguments, 3);
  ("a lesson on running a program a line at a time, over lesson_get's programs, that comes straight before that lesson rather than after it: it opens with that lesson's own boxes, then says how to run a program");
  ("Asked for by the human 2026-10-16: for the later lessons, a program is run step by step before the learner is asked for what it writes out all at once, and what a line means comes first - the pictures, then step by step, then the whole program. So the boxes that teach the new line come before the stepping, and the lesson after shows them again. Not picked: the stepping alone, with only how to run a program above it, which would hand the learner a line no box had explained yet.");
  let lesson = app_code_lesson_step_of_lesson_generic(
    title,
    title_code,
    lesson_get,
  );
  let above_step = property_get(lesson, "above");
  function above(root, context) {
    let taught = lesson_get();
    let above_taught = property_get(taught, "above");
    above_taught(root, context);
    above_step(root, context);
  }
  property_set(lesson, "above", above);
  ("2026-10-22: says whose boxes it opened with, so the lesson after it can leave them out for a learner who finished this one, rather than show them twice in a row");
  property_set(lesson, "above_taught_fn_name", lesson_get.name);
  return lesson;
}
