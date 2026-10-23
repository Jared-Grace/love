import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { app_code_program_step_correction } from "./app_code_program_step_correction.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { app_code_program_trace } from "./app_code_program_trace.mjs";
import { less_than } from "./less_than.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_program_step_line_press_words } from "./app_code_program_step_line_press_words.mjs";
import { null_is } from "./null_is.mjs";
import { app_code_lessons_exercises_each } from "./app_code_lessons_exercises_each.mjs";
export function app_code_program_step_presses_unexplained() {
  arguments_assert(arguments, 0);
  ("Every wrong press a step-by-step quiz can be given that says no reason: the lesson, the program, the line due and the line pressed. Hands back how many presses were looked at beside them, since nothing found is also what this says on the day it stops reaching any.");
  ("2026-10-23, the human's goal: each wrong choice has a helpful reminder. The step quiz asks which line runs next, again and again, so a wrong press is any line but the one due, at every step of every program, and each is asked the same function the screen asks");
  let rounds = 5;
  let walked = 0;
  let seen = [];
  let found = [];
  function on_exercise(exercise_visit) {
    let exercise = property_get(exercise_visit, "exercise");
    let info = property_get(exercise, "info");
    let correction = property_get_or(info, "correction", null);
    let b = equal(correction, app_code_program_step_correction);
    if (not(b)) {
      return;
    }
    let object = property_get(exercise_visit, "qa");
    let code = property_get(object, "question");
    if (list_includes(seen, code)) {
      return;
    }
    list_add(seen, code);
    let lines = text_split_newline(code);
    let trace = app_code_program_trace(code);
    for (let index = 0; less_than(index, list_size(trace)); index++) {
      let object2 = list_get(trace, index);
      let due = property_get(object2, "line");
      for (let i = 0; less_than(i, list_size(lines)); i++) {
        if (equal(i, due)) {
          continue;
        }
        walked++;
        let press = app_code_program_step_line_press_words(
          lines,
          trace,
          index,
          i,
        );
        if (null_is(press)) {
          list_add(found, {
            lesson: property_get(exercise_visit, "lesson"),
            code,
            due,
            pressed: i,
          });
        }
      }
    }
  }
  app_code_lessons_exercises_each(rounds, on_exercise);
  let r = {
    walked,
    found,
  };
  return r;
}
