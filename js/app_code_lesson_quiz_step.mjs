import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { app_code_program_step_through_generic } from "./app_code_program_step_through_generic.mjs";
export function app_code_lesson_quiz_step(
  parent,
  info,
  qa,
  on_success,
  on_wrong,
  batch_get,
  correction_code_set,
) {
  "the step-by-step quiz: the same answering as the worked example";
  "Its own named function, so a milestone can ask whether a quiz is this one by comparing the function itself. Its name read at run time would not do: a built page may shorten it.";
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
