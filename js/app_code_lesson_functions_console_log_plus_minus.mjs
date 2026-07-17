import { app_code_lesson_console_log_pair_generic } from "./app_code_lesson_console_log_pair_generic.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { integer_random } from "./integer_random.mjs";
import { range_map } from "./range_map.mjs";
import { add } from "./add.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_functions_console_log_plus_minus() {
  "mixing + and - in one expression: console.log(a + b - c) and console.log(a - b + c); + and - are the same strength, so it just works from left to right; the first number is 5..9 and the others 2..4 so the answer never drops below 0";
  let plus = js_operator_plus_symbol();
  let minus = js_operator_minus_symbol();
  function first_of(index) {
    "the possible first numbers 5 through 9 (big enough that taking one away stays at or above 0)";
    return add(index, 5);
  }
  function triple_of(first) {
    let b = integer_random(2, 4);
    let c = integer_random(2, 4);
    return [first, b, c];
  }
  function triples_get() {
    "four triples with four DIFFERENT first numbers, so the four questions are all distinct";
    let firsts = list_shuffle_take(range_map(5, first_of), 4);
    let triples = list_map(firsts, triple_of);
    return triples;
  }
  function above(root) {
    let box = app_code_container_light_blue(root);
    html_div_cycle_code(box, ["We can mix ", plus, " and ", minus, " together"]);
    html_div_cycle_code(box, ["Whichever one comes first, we do first"]);
    let example_box = app_code_container_light_blue(root);
    html_div_cycle_code(example_box, [
      "For example, for ",
      "5 + 2 - 3",
      ", we do ",
      "5 + 2",
      " first, which is ",
      "7",
    ]);
    html_div_cycle_code(example_box, ["Now we have ", "7 - 3", ", which is ", "4"]);
    html_div_cycle_code(example_box, ["So ", "5 + 2 - 3", " is ", "4"]);
  }
  let lesson = app_code_lesson_console_log_pair_generic({
    symbol1: plus,
    symbol2: minus,
    word: " plus minus",
    above,
    triples_get,
  });
  return lesson;
}
