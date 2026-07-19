import { app_code_lesson_expression_pair_generic } from "./app_code_lesson_expression_pair_generic.mjs";
import { app_code_lesson_cross_precedence_intro } from "./app_code_lesson_cross_precedence_intro.mjs";
import { js_operator_minus } from "./js_operator_minus.mjs";
import { js_operator_asterisk } from "./js_operator_asterisk.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { integer_random } from "./integer_random.mjs";
import { range_map } from "./range_map.mjs";
import { add } from "./add.mjs";
import { multiply } from "./multiply.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_expression_minus_times() {
  "mixing - and * in one expression: a - b * c and a * b - c; * is stronger than -, so we always do it first, even when it comes later; the hazard here is going below 0, so we use the minus operator's left_transform (add) to build a = result + b * c - then a - b * c is a chosen result that never drops under 0";
  let minus = js_operator_minus();
  let minus_symbol = property_get(minus, "operator");
  let left_transform = property_get(minus, "left_transform");
  let times = js_operator_asterisk();
  let times_symbol = property_get(times, "operator");
  function result_of(index) {
    "the possible results 2 through 5 (distinct across the four questions, so they never repeat)";
    return add(index, 2);
  }
  function triple_of(result) {
    "work backwards with the minus operator's inverse: a = result + b * c, so a - b * c is exactly result and never goes below 0";
    let b = integer_random(2, 3);
    let c = integer_random(2, 3);
    let product = multiply(b, c);
    let a = left_transform(result, product);
    return [a, b, c];
  }
  function triples_get() {
    "four triples with four DIFFERENT results, so the four questions are all distinct";
    let results = list_shuffle_take(range_map(4, result_of), 4);
    let triples = list_map(results, triple_of);
    return triples;
  }
  function above(root) {
    let box = app_code_container_light_blue(root);
    html_div_cycle_code(box, [
      "We always do ",
      times,
      " before ",
      minus_symbol,
      ", even if ",
      times,
      " appears later",
    ]);
    let later_box = app_code_container_light_blue(root);
    html_div_cycle_code(later_box, [
      "For ",
      "10 - 2 * 3",
      ", we do ",
      "2 * 3",
      " first, which is ",
      "6",
    ]);
    html_div_cycle_code(later_box, ["Now we have ", "10 - 6", ", which is ", "4"]);
    let first_box = app_code_container_light_blue(root);
    html_div_cycle_code(first_box, [
      "For ",
      "2 * 3 - 4",
      ", we do ",
      "2 * 3",
      " first, which is ",
      "6",
    ]);
    html_div_cycle_code(first_box, ["Now we have ", "6 - 4", ", which is ", "2"]);
  }
  let lesson = app_code_lesson_expression_pair_generic({
    symbol1: minus_symbol,
    symbol2: times,
    word: " minus times",
    above,
    triples_get,
  });
  return lesson;
}
