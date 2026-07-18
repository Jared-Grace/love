import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_container_light_blue_cycle_code } from "./app_code_container_light_blue_cycle_code.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_functions_console_log_true_false() {
  function refill() {
    let list = [js_keyword_true(), js_keyword_false()];
    return list;
  }
  let next_arg = list_iterator_refillable(refill);
  let name_id = title_name_id();
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id,
    next_arg,
    example_count: 2,
    forwards_answer_count_override: 2,
  });
  return lesson;
  function title_name_id() {
    "the home title code-styles the literal keywords true and false (and console.log), separated by a COMMA — a plain list of two concepts. NOT 'or' (implies exclusive choice, but we teach both) and NOT 'and' (a beginner reads it as the && operator). Matches how other lessons list items (app_code_lesson_name_id_remaining).";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text_code_dark(parent, js_keyword_true());
        html_span_text(parent, ", ");
        html_span_text_code_dark(parent, js_keyword_false());
      }
      return render;
    }
    let rights = [" true or false"];
    let built = app_code_lesson_name_id_generic(rights, "values", title_get);
    return built;
  }
  function above(root) {
    let c = app_code_container_light_blue(root);
    html_div_cycle_code(c, [
      "",
      js_keyword_true(),
      " and ",
      js_keyword_false(),
      " are the two yes-or-no answers you have seen",
    ]);
    app_code_container_light_blue_cycle_code(root, [
      "Now you can write ",
      js_keyword_true(),
      " or ",
      js_keyword_false(),
      " all by itself, with no question to ask",
    ]);
  }
}
