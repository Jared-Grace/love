import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_success_message } from "./app_shared_success_message.mjs";
import { html_div_first } from "./html_div_first.mjs";
import { html_flex_column_stretch } from "./html_flex_column_stretch.mjs";
import { app_code_head_spaced_above_code } from "./app_code_head_spaced_above_code.mjs";
import { app_code_program_step_through_generic } from "./app_code_program_step_through_generic.mjs";
export function app_code_lesson_example_guided(component, text, container) {
  arguments_assert(arguments, 3);
  ("a worked example that guides the learner step by step through running its program - it says what to do and why, and the learner chooses it - with nothing to tell the lesson when an answer is wrong; the quiz then asks the same without guiding, at the human's asking 2026-10-14");
  ("2026-11-01: taken out of the step lesson generic, so every lesson with a step-by-step quiz can guide its example the same way, as the step lessons it replaced did");
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
