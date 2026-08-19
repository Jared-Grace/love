import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_above } from "./app_code_lesson_above.mjs";
import { app_code_example_answer_label } from "./app_code_example_answer_label.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_code_output(
  parent,
  code_label,
  code,
  on_code,
  output_label,
  output,
  on_output,
) {
  arguments_assert(arguments, 7);
  ("a program and what it wrote out, drawn as one labelled card - the shape this app shows code beside its output in, wherever it shows it");
  ("One shape for one meaning. The worked example and the boxes read before the questions start are showing the same thing: this code, and what came out of it. A learner who has read the shape once reads it again without going back to the labels, so the shape carries the meaning and every screen after the first is cheaper to read.");
  ("The card is the pair and nothing else. Asking for another example is a button beside it rather than a part of it, which is what lets a box whose code never changes wear the same card as the example whose code changes every time it is pressed.");
  ("No output label means there is no output to show - a lesson whose example is worked through on the page has already shown the answer by the time it is finished, and printing it beside the line gives it away before anybody has pressed anything.");
  let a = app_code_lesson_above(parent, code_label, code, on_code);
  let container = property_get(a, "container");
  let output_shown = null_not_is(output_label);
  if (output_shown) {
    app_code_example_answer_label(container, output_label);
    on_output(container, output);
  }
  return container;
}
