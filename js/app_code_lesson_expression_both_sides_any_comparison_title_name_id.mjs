import { arguments_assert } from "./arguments_assert.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
export function app_code_lesson_expression_both_sides_any_comparison_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: arithmetic on each side of a comparison that is not ===, answered in one go, an Expressions lesson");
  ("It names the shape and the lesson it walks a press at a time names the doing - Solving both sides with any comparison. That is the same split the lesson before it already keeps, where Both sides arithmetic stands beside Solving both sides step by step.");
  ("Any comparison is said in words rather than by painting the five symbols, because five chips in a title is a list to be read where every other title on this list is a phrase, and the lesson is not about any one of the five.");
  function paint(parent) {
    html_cycle_code(parent, ["Both sides with any comparison"]);
  }
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(left, paint);
  return built;
}
