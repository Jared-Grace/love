import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
export function app_code_lesson_expression_equal_number_string_true_false_title_name_id() {
  "the home title: the one line the whole lesson turns on, shown rather than described. A number and the string that looks exactly like it, compared - the reader who already believes those are the same is the reader this lesson is for, and a title naming the rule in words would let them agree with it without ever noticing they had the wrong answer in mind.";
  function paint(parent) {
    html_cycle_code(parent, ["", '"1" === 1']);
  }
  let rights = ["equal number string true false"];
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(rights, left, paint);
  return built;
}
