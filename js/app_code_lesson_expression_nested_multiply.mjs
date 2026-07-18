import { app_code_lesson_console_log_nested_generic } from "./app_code_lesson_console_log_nested_generic.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_asterisk_verb } from "./js_operator_asterisk_verb.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { integer_random } from "./integer_random.mjs";
import { range_map } from "./range_map.mjs";
import { add } from "./add.mjs";
export function app_code_lesson_expression_nested_multiply() {
  "a nested expression that multiplies three numbers: console.log(x * y * z); the first is 2..5 and the other two are small (2..4 and 2..3), so the product stays at or below 60 and can be worked out step by step";
  let symbol = js_operator_asterisk_symbol();
  function first_of(index) {
    "the possible first numbers 2 through 5";
    return add(index, 2);
  }
  function triple_of(first) {
    let y = integer_random(2, 4);
    let z = integer_random(2, 3);
    return [first, y, z];
  }
  function triples_get() {
    "four triples with four DIFFERENT first numbers, so the four questions are all distinct";
    let firsts = list_shuffle_take(range_map(4, first_of), 4);
    let triples = list_map(firsts, triple_of);
    return triples;
  }
  let lesson = app_code_lesson_console_log_nested_generic({
    symbol,
    word: " nested multiply",
    verb: js_operator_asterisk_verb(),
    pair: [2, 3],
    example_triple: [2, 3, 4],
    triples_get,
  });
  return lesson;
}
