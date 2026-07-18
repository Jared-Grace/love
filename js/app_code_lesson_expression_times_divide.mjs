import { app_code_lesson_expression_pair_generic } from "./app_code_lesson_expression_pair_generic.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { integer_random } from "./integer_random.mjs";
import { range_map } from "./range_map.mjs";
import { add } from "./add.mjs";
import { multiply } from "./multiply.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_times_divide() {
  "mixing * and / in one expression: a * b / c and a / b * c; * and / are the same strength, so it just works from left to right; each triple is built so a = b * c, which keeps BOTH arrangements whole numbers (a * b / c and a / b * c) - no decimals either way";
  let times = js_operator_asterisk_symbol();
  let divide = js_operator_division_symbol();
  function first_of(index) {
    "the possible b numbers 2 through 5 (distinct across the four questions, so they never repeat)";
    return add(index, 2);
  }
  function triple_of(b) {
    "a is b times c, so a is divisible by both b and c - that makes a * b / c and a / b * c whole no matter which order the pair generic uses";
    let c = integer_random(2, 3);
    let a = multiply(b, c);
    return [a, b, c];
  }
  function triples_get() {
    "four triples with four DIFFERENT b numbers, so the four questions are all distinct";
    let bs = list_shuffle_take(range_map(4, first_of), 4);
    let triples = list_map(bs, triple_of);
    return triples;
  }
  function above(root) {
    let box = app_code_container_light_blue(root);
    html_div_cycle_code(box, ["We can mix ", times, " and ", divide, " together"]);
    html_div_cycle_code(box, ["Whichever one comes first, we do first"]);
    let example_box = app_code_container_light_blue(root);
    html_div_cycle_code(example_box, [
      "For example, for ",
      "6 * 2 / 3",
      ", we do ",
      "6 * 2",
      " first, which is ",
      "12",
    ]);
    html_div_cycle_code(example_box, ["Now we have ", "12 / 3", ", which is ", "4"]);
    html_div_cycle_code(example_box, ["So ", "6 * 2 / 3", " is ", "4"]);
  }
  let lesson = app_code_lesson_expression_pair_generic({
    symbol1: times,
    symbol2: divide,
    word: " times divide",
    above,
    triples_get,
  });
  return lesson;
}
