import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { text_is } from "./text_is.mjs";
import { app_learn_js_program_step_trace } from "./app_learn_js_program_step_trace.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { app_learn_js_program_trace } from "./app_learn_js_program_trace.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { equal } from "./equal.mjs";
import { app_learn_js_program_step_line_press_words } from "./app_learn_js_program_step_line_press_words.mjs";
import { null_is } from "./null_is.mjs";
export function app_learn_js_lesson_steps_unsolved_why(lesson) {
  arguments_assert(arguments, 1);
  ("Why the step-by-step quiz could not be given this lesson's programs, or null when it could: every program its batch draws over several rounds is traced the way the step-through traces it, and every wrong press at every step must say why it is wrong, the same test the presses gate makes of the lessons already stepping.");
  ("2026-11-12, at the human's asking: steps turned on wherever the step-through solves a lesson's programs, and the lessons it cannot solve reported. A trace that throws is how the step-through refuses a program it cannot follow, so a throw is the answer, not an accident.");
  let rounds = 5;
  let batch_get = property_get(lesson, "batch");
  let codes = [];
  for (let round = 0; less_than(round, rounds); round++) {
    for (let qa of batch_get()) {
      let code = property_get(qa, "question");
      let b = list_includes(codes, code);
      if (not(b)) {
        list_add(codes, code);
      }
    }
  }
  for (let code of codes) {
    let b2 = text_is(code);
    if (not(b2)) {
      let r = "a question that is not a program";
      return r;
    }
    try {
      app_learn_js_program_step_trace(code);
      let lines = text_split_newline(code);
      let trace = app_learn_js_program_trace(code);
      for (let index = 0; less_than_equal(index, list_size(trace)); index++) {
        let due = -1;
        let b3 = list_size(trace);
        if (less_than(index, b3)) {
          let object = list_get(trace, index);
          due = property_get(object, "line");
        }
        for (let i = 0; less_than(i, list_size(lines)); i++) {
          if (equal(i, due)) {
            continue;
          }
          let press = app_learn_js_program_step_line_press_words(
            lines,
            trace,
            index,
            i,
          );
          if (null_is(press)) {
            let r2 = "a wrong press that says nothing: " + code;
            return r2;
          }
        }
      }
    } catch (e) {
      let r3 = "the step-through cannot follow: " + code;
      return r3;
    }
  }
  return null;
}
