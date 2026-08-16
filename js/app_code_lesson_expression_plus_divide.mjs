import { list_shuffle_take_map } from "./list_shuffle_take_map.mjs";
import { app_code_lesson_expression_pair_generic } from "./app_code_lesson_expression_pair_generic.mjs";
import { app_code_lesson_cross_precedence_intro } from "./app_code_lesson_cross_precedence_intro.mjs";
import { js_operator_plus } from "./js_operator_plus.mjs";
import { js_operator_division } from "./js_operator_division.mjs";
import { integer_random } from "./integer_random.mjs";
import { range_map } from "./range_map.mjs";
import { add } from "./add.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_expression_plus_divide() {
  "mixing + and / in one expression: a + b / c and a / b + c; / is stronger than +, so we always do it first, even when it comes later; / needs whole-number answers, so we use the division operator's left_transform (multiply) to build a divisibility chain a = outer * b, b = inner * c - then b / c and a / b are both whole, keeping BOTH arrangements clean";
  let plus = js_operator_plus();
  let plus_symbol = property_get(plus, "operator");
  let divided = js_operator_division();
  let divide_symbol = property_get(divided, "operator");
  let left_transform = property_get(divided, "left_transform");
  function outer_of(index) {
    "the possible outer answers 2 through 5 (distinct across the four questions, so they never repeat)";
    let sum = add(index, 2);
    return sum;
  }
  function triple_of(outer) {
    "work backwards with the division operator's inverse: b divides evenly by c (b = inner * c), and a divides evenly by b (a = outer * b)";
    let c = integer_random(2, 3);
    let inner = integer_random(2, 3);
    let b = left_transform(inner, c);
    let a = left_transform(outer, b);
    let r = [a, b, c];
    return r;
  }
  function triples_get() {
    "four triples with four DIFFERENT outer answers, so the four questions are all distinct";
    let list = range_map(4, outer_of);
    let triples = list_shuffle_take_map(list, 4, triple_of);
    return triples;
  }
  function above(root) {
    "the numbers are picked so no number is said twice inside one worked line: 2 + 6 / 3 would come to 2 + 2, and a learner reading that has to work out which 2 was already there and which one the division just made";
    app_code_lesson_cross_precedence_intro({
      root,
      weak: plus,
      strong: divided,
      later_inner_left: 6,
      later_inner_right: 3,
      later_outer: 5,
      first_inner_left: 8,
      first_inner_right: 2,
      first_outer: 9,
    });
  }
  let lesson = app_code_lesson_expression_pair_generic({
    symbol1: plus_symbol,
    symbol2: divide_symbol,
    word: " plus divide",
    above,
    triples_get,
  });
  return lesson;
}
