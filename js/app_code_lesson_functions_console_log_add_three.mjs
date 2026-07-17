import { app_code_lesson_console_log_chained_generic } from "./app_code_lesson_console_log_chained_generic.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { integer_random } from "./integer_random.mjs";
import { range_map } from "./range_map.mjs";
import { add } from "./add.mjs";
export function app_code_lesson_functions_console_log_add_three() {
  "add three numbers: console.log(x + y + z), with small numbers 2..9 so the sum stays easy (6..27)";
  let symbol = js_operator_plus_symbol();
  function first_of(index) {
    "the possible first numbers 2 through 9";
    return add(index, 2);
  }
  function triple_of(first) {
    let y = integer_random(2, 9);
    let z = integer_random(2, 9);
    return [first, y, z];
  }
  function triples_get() {
    "four triples with four DIFFERENT first numbers, so the four questions are all distinct";
    let firsts = list_shuffle_take(range_map(8, first_of), 4);
    let triples = list_map(firsts, triple_of);
    return triples;
  }
  let lesson = app_code_lesson_console_log_chained_generic({
    symbol,
    word: " add",
    example_triple: [2, 3, 4],
    triples_get,
  });
  return lesson;
}
