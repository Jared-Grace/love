import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_code_lesson_statement_names_binary } from "./app_code_lesson_statement_names_binary.mjs";
import { app_code_lesson_operators_asterisk } from "./app_code_lesson_operators_asterisk.mjs";
export function app_code_lesson_statement_name_multiply() {
  arguments_assert(arguments, 0);
  ("two names multiplied: let a = 3; let b = 4; let product = a * b; console.log(product); writes out 12");
  ("The same screen as the lessons that add and subtract two names, with the symbol changed. The names stand in the same two places; only what is done with them is new, and multiplying two numbers is a thing the learner has done since the Operators lessons.");
  ("Every written number is five or less and every answer is six or more, and the five answers differ from one another. So no answer can be spotted written somewhere on the screen, and no two programs share an answer.");
  let asterisk = js_operator_asterisk_symbol();
  function pairs_get() {
    "four of the five pairs, in a fresh order each screen";
    let candidates = [
      [2, 3],
      [2, 5],
      [3, 4],
      [3, 5],
      [4, 5],
    ];
    let pairs = list_shuffle_take(candidates, 4);
    return pairs;
  }
  let lesson = app_code_lesson_statement_names_binary({
    words: "Multiplying two names",
    symbol: asterisk,
    pairs_get,
    example_pair: [2, 4],
    remember_lesson: app_code_lesson_operators_asterisk,
    remember_parts: ["we can multiply (", asterisk, ") two numbers:"],
    answer_name: "product",
    answer_count: null,
  });
  return lesson;
}
