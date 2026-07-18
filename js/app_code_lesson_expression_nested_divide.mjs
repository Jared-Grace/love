import { app_code_lesson_console_log_nested_generic } from "./app_code_lesson_console_log_nested_generic.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { js_operator_division_verb } from "./js_operator_division_verb.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { integer_random } from "./integer_random.mjs";
import { range_map } from "./range_map.mjs";
import { add } from "./add.mjs";
import { multiply } from "./multiply.mjs";
export function app_code_lesson_expression_nested_divide() {
  "a nested expression that divides three numbers: console.log(x / y / z); built BACKWARDS from a small answer so it always divides evenly with no decimals - pick the middle number y, an answer r (2..4) and z (2..3), then x = r * y * z, so x / y / z is exactly r";
  let symbol = js_operator_division_symbol();
  function middle_of(index) {
    "the possible middle numbers 2 through 5 (distinct across the four questions, so they never repeat)";
    return add(index, 2);
  }
  function triple_of(middle) {
    let answer = integer_random(2, 4);
    let last = integer_random(2, 3);
    let first = multiply(multiply(answer, middle), last);
    return [first, middle, last];
  }
  function triples_get() {
    "four triples with four DIFFERENT middle numbers, so the four questions are all distinct";
    let middles = list_shuffle_take(range_map(4, middle_of), 4);
    let triples = list_map(middles, triple_of);
    return triples;
  }
  let lesson = app_code_lesson_console_log_nested_generic({
    symbol,
    word: " nested divide",
    verb: js_operator_division_verb(),
    pair: [8, 2],
    example_triple: [12, 3, 2],
    triples_get,
  });
  return lesson;
}
