import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_div_cycle_code } from "./app_code_div_cycle_code.mjs";
import { app_code_braces_two_ifs } from "./app_code_braces_two_ifs.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_lesson_above } from "./app_code_lesson_above.mjs";
import { app_code_code_dark_lines_comments } from "./app_code_code_dark_lines_comments.mjs";
export function app_code_braces_run_two_ifs_explain(root, context) {
  arguments_assert(arguments, 2);
  ("two ifs, one after the other, shown, then the four ways they may run");
  ("Written by the human 2026-10-11, replacing the one rule this lesson had, that each if asks its own test whatever the one before it did. Not picked: moving The same if twice into here, at the human's own question, since that lesson is about a name changed by the first if changing what the second asks, which programs of names that are only ever true or false cannot show.");
  ("The code is the two ifs alone, with no let above them, because what follows says what may happen, which is every way at once rather than the one way that fixed values would give.");
  let box = app_code_container_light_blue(root);
  app_code_div_cycle_code(box, ["Code can have multiple ", "if", "s"]);
  app_code_div_cycle_code(box, ["Here there are two ", "if", "s:"]);
  let code = app_code_braces_two_ifs();
  let code_label = app_code_label_code_question();
  app_code_lesson_above(
    box,
    code_label,
    code,
    app_code_code_dark_lines_comments,
  );
  app_code_div_cycle_code(box, [
    "Both ",
    "if",
    "s are separate from each other",
  ]);
  app_code_div_cycle_code(box, ["Both may run"]);
  app_code_div_cycle_code(box, ["Or neither may run"]);
  app_code_div_cycle_code(box, ["Or only the first may run"]);
  app_code_div_cycle_code(box, ["Or only the last may run"]);
}
