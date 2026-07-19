import { app_code_lesson_expression_pair_generic } from "./app_code_lesson_expression_pair_generic.mjs";
import { app_code_lesson_cross_precedence_intro } from "./app_code_lesson_cross_precedence_intro.mjs";
import { js_operator_plus } from "./js_operator_plus.mjs";
import { js_operator_asterisk } from "./js_operator_asterisk.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { integer_random } from "./integer_random.mjs";
import { range_map } from "./range_map.mjs";
import { add } from "./add.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_expression_plus_times() {
  "mixing + and * in one expression: a + b * c and a * b + c; unlike + and -, these are NOT the same strength - * is stronger, so we always do it first, even when it comes later in the line; the intro shows the SAME multiplication in both positions to prove position does not change what we do first; only + and * here, so every value is a whole number";
  let plus = js_operator_plus();
  let times = js_operator_asterisk();
  let plus_symbol = property_get(plus, "operator");
  let times_symbol = property_get(times, "operator");
  function first_of(index) {
    "the possible first numbers 2 through 5 (distinct across the four questions, so they never repeat)";
    return add(index, 2);
  }
  function triple_of(first) {
    let b = integer_random(2, 3);
    let c = integer_random(2, 3);
    return [first, b, c];
  }
  function triples_get() {
    "four triples with four DIFFERENT first numbers, so the four questions are all distinct";
    let firsts = list_shuffle_take(range_map(4, first_of), 4);
    let triples = list_map(firsts, triple_of);
    return triples;
  }
  function above(root) {
    app_code_lesson_cross_precedence_intro({
      root,
      weak: plus,
      strong: times,
      inner_left: 3,
      inner_right: 4,
      later_outer: 2,
      first_outer: 2,
    });
  }
  let lesson = app_code_lesson_expression_pair_generic({
    symbol1: plus_symbol,
    symbol2: times_symbol,
    word: " plus times",
    above,
    triples_get,
  });
  return lesson;
}
