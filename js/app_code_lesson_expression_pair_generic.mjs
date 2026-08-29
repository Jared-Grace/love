import { property_get } from "./property_get.mjs";
import { list_get } from "./list_get.mjs";
import { modulo } from "./modulo.mjs";
import { equal_0 } from "./equal_0.mjs";
import { ternary } from "./ternary.mjs";
import { text_to } from "./text_to.mjs";
import { list_join } from "./list_join.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { js_eval_left_to_right } from "./js_eval_left_to_right.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
export function app_code_lesson_expression_pair_generic(params) {
  "a reusable bare-expression lesson mixing TWO operators (a op1 b op2 c); the arrangement flips by index parity so the two worked examples always show opposite orders (a op1 b op2 c and a op2 b op1 c) - proving precedence is about the operator, not its position; caller passes the two symbols, an above intro, and triples_get returning distinct [a,b,c] triples";
  "A word for the id used to be taken out of what the caller hands in and then never read. The id is built from the two symbols, which is what tells one of these lessons from another, so the word had nothing left to do.";
  let symbol = property_get(params, "symbol1");
  let symbol2 = property_get(params, "symbol2");
  let above = property_get(params, "above");
  let triples_get = property_get(params, "triples_get");
  function to_code(triple, index) {
    let a = list_get(triple, 0);
    let b = list_get(triple, 1);
    let c = list_get(triple, 2);
    let item = modulo(index, 2);
    let symbol1_first = equal_0(item);
    let first_op = ternary(symbol1_first, symbol, symbol2);
    let second_op = ternary(symbol1_first, symbol2, symbol);
    let t = text_to(a);
    let t2 = text_to(b);
    let t3 = text_to(c);
    let parts = [t, first_op, t2, second_op, t3];
    let code = list_join(parts, " ");
    return code;
  }
  function refill() {
    let triples = triples_get();
    let list = list_map_index(triples, to_code);
    return list;
  }
  function decoys(question, answer) {
    "the tailored wrong answer is the LEFT-TO-RIGHT value, ignoring precedence - the classic order-of-operations mistake (2 + 3 * 4 read as (2 + 3) * 4 = 20). For same-precedence pairs it equals the real answer, so the multiple choice just drops it as a duplicate";
    let v = js_eval_left_to_right(question);
    let r = [v];
    return r;
  }
  let next_arg = list_iterator_refillable(refill);
  let name_id = title_name_id();
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id,
    next_arg,
    example_count: 2,
    decoys,
  });
  return lesson;
  function title_name_id() {
    "the home title is <op1> <op2>, an Expressions lesson";
    function paint(parent) {
      html_span_text_code_dark(parent, symbol);
      html_span_text(parent, " ");
      html_span_text_code_dark(parent, symbol2);
    }
    let left = app_code_category_expressions();
    let built = app_code_lesson_name_id_category_then(left, paint);
    return built;
  }
}
