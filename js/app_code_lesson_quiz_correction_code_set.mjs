import { object_copy_property_set } from "./object_copy_property_set.mjs";
import { app_code_lesson_quiz_render_correction } from "./app_code_lesson_quiz_render_correction.mjs";
export function app_code_lesson_quiz_correction_code_set(
  container_correction,
  correction_render,
  qa,
  answer_property,
) {
  "hands a quiz a way to say which wording of the answer the reveal should show, for the quizzes where the answer can be written more than one way";
  "The unscramble is the one that needs it. Its line can be built in several orders, all of them right, and the learner picks one by tapping. Shown the wording the question happened to be written in, a learner who has correctly built 2 * is told the answer is 2 + 2 * 3 - which says their own first two pieces were a mistake when they were not.";
  "The correction is drawn again rather than drawn later, because the slot it sits in has to be as tall as the taller of the correction and the success message from the moment the question opens, or the screen jumps under the learner's finger when they ask. Drawn again, it is redrawn hidden, and asking is still what makes it visible.";
  function correction_code_set(code) {
    let qa2 = object_copy_property_set(qa, answer_property, code);
    app_code_lesson_quiz_render_correction(
      container_correction,
      correction_render,
      qa2,
    );
  }
  return correction_code_set;
}
