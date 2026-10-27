import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_braces_run } from "./app_code_lesson_braces_run.mjs";
import { app_code_div_cycle_code } from "./app_code_div_cycle_code.mjs";
import { app_code_braces_three_ifs } from "./app_code_braces_three_ifs.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_lesson_above } from "./app_code_lesson_above.mjs";
import { app_code_code_dark_lines_comments } from "./app_code_code_dark_lines_comments.mjs";
export function app_code_braces_run_three_ifs_explain(root, context) {
  arguments_assert(arguments, 2);
  ("two ifs remembered, then three ifs, one after the other, shown, then the ways they may run");
  ("Written by Claude 2026-10-11 after the human's two ifs explanation (",
    fn_name("app_code_braces_run_two_ifs_explain"),
    "), replacing the one rule this lesson had, that each of three ifs asks its own test. Not picked: moving The same if three times into here, as was done for the other shapes, since that lesson is about a name changed by each if changing what the next asks, which programs of names that are only ever true or false cannot show - the same reason The same if twice stayed out of the two ifs lesson.");
  ("The eight ways are not listed one by one as the four were for two ifs: eight lines say less than the one fact that any of them may run whatever the others do.");
  let box_one = app_code_container_light_blue(root);
  app_code_remember_from_lesson(box_one, context, app_code_lesson_braces_run, [
    "Two ",
    "if",
    "s are separate from each other",
  ]);
  let box = app_code_container_light_blue(root);
  app_code_div_cycle_code(box, ["Here there are three ", "if", "s:"]);
  let code = app_code_braces_three_ifs();
  let code_label = app_code_label_code_question();
  app_code_lesson_above(
    box,
    code_label,
    code,
    app_code_code_dark_lines_comments,
  );
  app_code_div_cycle_code(box, [
    "All three ",
    "if",
    "s are separate from each other",
  ]);
  app_code_div_cycle_code(box, ["All three may run"]);
  app_code_div_cycle_code(box, ["Or none may run"]);
  app_code_div_cycle_code(box, ["Or any one or two of them may run"]);
}
