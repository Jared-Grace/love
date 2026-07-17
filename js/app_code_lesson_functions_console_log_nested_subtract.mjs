import { app_code_lesson_console_log_nested_generic } from "./app_code_lesson_console_log_nested_generic.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_operator_minus_verb } from "./js_operator_minus_verb.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { integer_random } from "./integer_random.mjs";
import { range_map } from "./range_map.mjs";
import { add } from "./add.mjs";
export function app_code_lesson_functions_console_log_nested_subtract() {
  "a nested expression that subtracts three numbers: console.log(x - y - z); the first number is 10..17 and the two taken away are 2..5 each, so x is always at least y + z and the answer never goes below 0";
  let symbol = js_operator_minus_symbol();
  function first_of(index) {
    "the possible first numbers 10 through 17 (big enough that taking two away stays at or above 0)";
    return add(index, 10);
  }
  function triple_of(first) {
    let y = integer_random(2, 5);
    let z = integer_random(2, 5);
    return [first, y, z];
  }
  function triples_get() {
    "four triples with four DIFFERENT first numbers, so the four questions are all distinct";
    let firsts = list_shuffle_take(range_map(8, first_of), 4);
    let triples = list_map(firsts, triple_of);
    return triples;
  }
  let lesson = app_code_lesson_console_log_nested_generic({
    symbol,
    word: " nested subtract",
    verb: js_operator_minus_verb(),
    pair: [5, 2],
    example_triple: [9, 3, 2],
    triples_get,
  });
  return lesson;
}
