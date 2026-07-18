import { app_code_lesson_expression_pair_generic } from "./app_code_lesson_expression_pair_generic.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_division } from "./js_operator_division.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { integer_random } from "./integer_random.mjs";
import { range_map } from "./range_map.mjs";
import { add } from "./add.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_plus_divide() {
  "mixing + and / in one expression: a + b / c and a / b + c; / is stronger than +, so we always do it first, even when it comes later; / needs whole-number answers, so we use the division operator's left_transform (multiply) to build a divisibility chain a = outer * b, b = inner * c - then b / c and a / b are both whole, keeping BOTH arrangements clean";
  let plus = js_operator_plus_symbol();
  let divide = js_operator_division();
  let divide_symbol = property_get(divide, "operator");
  let left_transform = property_get(divide, "left_transform");
  function outer_of(index) {
    "the possible outer answers 2 through 5 (distinct across the four questions, so they never repeat)";
    return add(index, 2);
  }
  function triple_of(outer) {
    "work backwards with the division operator's inverse: b divides evenly by c (b = inner * c), and a divides evenly by b (a = outer * b)";
    let c = integer_random(2, 3);
    let inner = integer_random(2, 3);
    let b = left_transform(inner, c);
    let a = left_transform(outer, b);
    return [a, b, c];
  }
  function triples_get() {
    "four triples with four DIFFERENT outer answers, so the four questions are all distinct";
    let outers = list_shuffle_take(range_map(4, outer_of), 4);
    let triples = list_map(outers, triple_of);
    return triples;
  }
  function above(root) {
    let box = app_code_container_light_blue(root);
    html_div_cycle_code(box, [
      "We always do ",
      divide_symbol,
      " before ",
      plus,
      ", even if ",
      divide_symbol,
      " appears later",
    ]);
    let later_box = app_code_container_light_blue(root);
    html_div_cycle_code(later_box, [
      "For ",
      "2 + 6 / 3",
      ", we do ",
      "6 / 3",
      " first, which is ",
      "2",
    ]);
    html_div_cycle_code(later_box, ["Now we have ", "2 + 2", ", which is ", "4"]);
    let first_box = app_code_container_light_blue(root);
    html_div_cycle_code(first_box, [
      "For ",
      "6 / 3 + 2",
      ", we do ",
      "6 / 3",
      " first, which is ",
      "2",
    ]);
    html_div_cycle_code(first_box, ["Now we have ", "2 + 2", ", which is ", "4"]);
  }
  let lesson = app_code_lesson_expression_pair_generic({
    symbol1: plus,
    symbol2: divide_symbol,
    word: " plus divide",
    above,
    triples_get,
  });
  return lesson;
}
