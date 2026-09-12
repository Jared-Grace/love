import { app_code_lesson_name_id_operators } from "./app_code_lesson_name_id_operators.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_code_lesson_expression_whole_part_both_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title says Whole part, the plain name, because this is the lesson that asks for the whole part itself: a division goes in and its whole part comes back");
  ("★ IT WAS TITLED Whole part in one step, WHICH READS AS A SHORTCUT ROUND SOMETHING. The step it is in one of is the formula the lesson before it teaches, and a learner meeting this title on the home list has no way to know that - in one step says there is a longer way without saying what the longer way was. The lesson before it now carries from formula, so the two titles say which is which from the outside.");
  function paint(parent) {
    html_span_text(parent, "Whole part");
  }
  let built = app_code_lesson_name_id_operators(paint);
  return built;
}
