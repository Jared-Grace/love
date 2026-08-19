import { arguments_assert } from "./arguments_assert.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
export function app_code_lesson_expression_choose_order_and_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: solving both sides of &&, an Expressions lesson");
  ("The title paints the symbol and spells the word, the same way every other && lesson does: the lesson is about the symbol, and the word is only what the address is written with, where a symbol cannot go.");
  function paint(parent) {
    html_cycle_code(parent, ["solving both sides of ", "&&"]);
  }
  let rights = ["solving both sides of and"];
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(rights, left, paint);
  return built;
}
