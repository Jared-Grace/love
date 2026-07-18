import { app_code_lesson_expression_pair_generic } from "./app_code_lesson_expression_pair_generic.mjs";
import { js_operator_division } from "./js_operator_division.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { integer_random } from "./integer_random.mjs";
import { range_map } from "./range_map.mjs";
import { add } from "./add.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_minus_divide() {
  "mixing - and / in one expression: a - b / c and a / b - c; / is stronger than -, so we always do it first, even when it comes later; this pair has BOTH hazards - / must divide evenly and - must not drop below 0; the division operator's left_transform (multiply) builds the divisibility chain a = outer * b, b = inner * c, and choosing outer = c + gap keeps a / b - c at gap (>= 1), while a - b / c stays large and positive";
  let divide = js_operator_division();
  let divide_symbol = property_get(divide, "operator");
  let left_transform = property_get(divide, "left_transform");
  let minus = js_operator_minus_symbol();
  function gap_of(index) {
    "the possible gaps 1 through 4 - the answer of the a / b - c arrangement (distinct across the four questions, so they never repeat)";
    return add(index, 1);
  }
  function triple_of(gap) {
    "work backwards: b = inner * c so b / c is whole, a = outer * b so a / b is whole, and outer = c + gap so a / b - c is exactly gap and never goes below 0";
    let c = integer_random(2, 3);
    let inner = integer_random(2, 3);
    let outer = add(c, gap);
    let b = left_transform(inner, c);
    let a = left_transform(outer, b);
    return [a, b, c];
  }
  function triples_get() {
    "four triples with four DIFFERENT gaps, so the four questions are all distinct";
    let gaps = list_shuffle_take(range_map(4, gap_of), 4);
    let triples = list_map(gaps, triple_of);
    return triples;
  }
  function above(root) {
    let box = app_code_container_light_blue(root);
    html_div_cycle_code(box, [
      "We always do ",
      divide_symbol,
      " before ",
      minus,
      ", even if ",
      divide_symbol,
      " appears later",
    ]);
    let later_box = app_code_container_light_blue(root);
    html_div_cycle_code(later_box, [
      "For ",
      "10 - 6 / 3",
      ", we do ",
      "6 / 3",
      " first, which is ",
      "2",
    ]);
    html_div_cycle_code(later_box, ["Now we have ", "10 - 2", ", which is ", "8"]);
    let first_box = app_code_container_light_blue(root);
    html_div_cycle_code(first_box, [
      "For ",
      "6 / 3 - 1",
      ", we do ",
      "6 / 3",
      " first, which is ",
      "2",
    ]);
    html_div_cycle_code(first_box, ["Now we have ", "2 - 1", ", which is ", "1"]);
  }
  let lesson = app_code_lesson_expression_pair_generic({
    symbol1: minus,
    symbol2: divide_symbol,
    word: " minus divide",
    above,
    triples_get,
  });
  return lesson;
}
