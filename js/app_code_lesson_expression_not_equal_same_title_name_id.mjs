import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { js_operator_bang } from "./js_operator_bang.mjs";
import { js_operator_bang_double_equal } from "./js_operator_bang_double_equal.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_expression_not_equal_same_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: !== written with !, an Expressions lesson. Both symbols are painted as code, because the lesson is the sentence that joins them - the words are only what the URL name is spelled with, where a symbol cannot go");
  let different = js_operator_bang_double_equal();
  let different_symbol = property_get(different, "operator");
  let bang = js_operator_bang();
  let bang_symbol = property_get(bang, "operator");
  function paint(parent) {
    html_cycle_code(parent, [
      "",
      different_symbol,
      " written with ",
      bang_symbol,
    ]);
  }
  let rights = ["not equal written with not"];
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(rights, left, paint);
  return built;
}
