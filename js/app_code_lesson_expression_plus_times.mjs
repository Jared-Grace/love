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
    let box = app_code_container_light_blue(root);
    html_div_cycle_code(box, [
      "We always do ",
      times,
      " before ",
      plus,
      ", even if ",
      times,
      " appears later",
    ]);
    let later_box = app_code_container_light_blue(root);
    html_div_cycle_code(later_box, [
      "For ",
      "2 + 3 * 4",
      ", we do ",
      "3 * 4",
      " first, which is ",
      "12",
    ]);
    html_div_cycle_code(later_box, ["Now we have ", "2 + 12", ", which is ", "14"]);
    let first_box = app_code_container_light_blue(root);
    html_div_cycle_code(first_box, [
      "For ",
      "3 * 4 + 2",
      ", we do ",
      "3 * 4",
      " first, which is ",
      "12",
    ]);
    html_div_cycle_code(first_box, ["Now we have ", "12 + 2", ", which is ", "14"]);
  }
  let lesson = app_code_lesson_expression_pair_generic({
    symbol1: plus,
    symbol2: times,
    word: " plus times",
    above,
    triples_get,
  });
  return lesson;
}
