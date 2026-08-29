import { fn_name } from "./fn_name.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_container_light_blue_cycle_code } from "./app_code_container_light_blue_cycle_code.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_true_false() {
  function refill() {
    let t = js_keyword_true();
    let f = js_keyword_false();
    let list = [t, f];
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
    ("the home title code-styles the literal keywords true and false (and console.log), separated by a COMMA — a plain list of two concepts. NOT 'or' (implies exclusive choice, but we teach both) and NOT 'and' (a beginner reads it as the && operator). Matches how other lessons list items (",
      fn_name("app_code_lesson_name_id_remaining"),
      ").");
    function paint(parent) {
      let text = js_keyword_true();
      html_span_text_code_dark(parent, text);
      html_span_text(parent, ", ");
      let text2 = js_keyword_false();
      html_span_text_code_dark(parent, text2);
    }
    let built = app_code_lesson_name_id_category_then("values", paint);
    return built;
  }
  function above(root) {
    let c = app_code_container_light_blue(root);
    let t2 = js_keyword_true();
    let f2 = js_keyword_false();
    html_div_cycle_code(c, [
      "",
      t2,
      " and ",
      f2,
      " are the two yes-or-no answers you have seen",
    ]);
    let t3 = js_keyword_true();
    let f3 = js_keyword_false();
    app_code_container_light_blue_cycle_code(root, [
      "Now you can write ",
      t3,
      " or ",
      f3,
      " all by itself, with no question to ask",
    ]);
  }
}
