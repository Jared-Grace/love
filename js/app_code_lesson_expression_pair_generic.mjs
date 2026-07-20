import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { list_get } from "./list_get.mjs";
import { list_join } from "./list_join.mjs";
import { text_to } from "./text_to.mjs";
import { equal_0 } from "./equal_0.mjs";
import { modulo } from "./modulo.mjs";
import { ternary } from "./ternary.mjs";
import { js_eval_left_to_right } from "./js_eval_left_to_right.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_expression_pair_generic(params) {
  "a reusable bare-expression lesson mixing TWO operators (a op1 b op2 c); the arrangement flips by index parity so the two worked examples always show opposite orders (a op1 b op2 c and a op2 b op1 c) - proving precedence is about the operator, not its position; caller passes the two symbols, a word for the id, an above intro, and triples_get returning distinct [a,b,c] triples";
  let symbol1 = property_get(params, "symbol1");
  let symbol2 = property_get(params, "symbol2");
  let word = property_get(params, "word");
  let above = property_get(params, "above");
  let triples_get = property_get(params, "triples_get");
  function to_code(triple, index) {
    let a = list_get(triple, 0);
    let b = list_get(triple, 1);
    let c = list_get(triple, 2);
    let symbol1_first = equal_0(modulo(index, 2));
    let first_op = ternary(symbol1_first, symbol1, symbol2);
    let second_op = ternary(symbol1_first, symbol2, symbol1);
    let parts = [text_to(a), first_op, text_to(b), second_op, text_to(c)];
    let code = list_join(parts, " ");
    return code;
  }
  function refill() {
    let triples = triples_get();
    let list = list_map_index(triples, to_code);
    return list;
  }
  let next_arg = list_iterator_refillable(refill);
  let name_id = title_name_id();
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id,
    next_arg,
    example_count: 2,
  });
  return lesson;
  function title_name_id() {
    "the home title is <op1> <op2>, an Expressions lesson";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text_code_dark(parent, symbol1);
        html_span_text(parent, " ");
        html_span_text_code_dark(parent, symbol2);
      }
      return render;
    }
    let rights = [word];
    let built = app_code_lesson_name_id_generic(rights, "expressions", title_get);
    return built;
  }
}
