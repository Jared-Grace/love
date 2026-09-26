import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_percent_symbol } from "./js_operator_percent_symbol.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_code_lesson_statement_names_binary } from "./app_code_lesson_statement_names_binary.mjs";
import { app_code_lesson_expression_remainder_any } from "./app_code_lesson_expression_remainder_any.mjs";
export function app_code_lesson_statement_name_remainder() {
  arguments_assert(arguments, 0);
  ("the remainder of one name divided by another: let a = 20; let b = 9; console.log(a % b); writes out 2");
  ("The same screen as the lessons that add, subtract, multiply and divide two names, with the symbol changed. The reminder points at the lesson where the divisor first varied, because that is where a learner last worked a remainder with any two numbers.");
  ("Every divisor is seven or more and every answer is six or less, and the five answers differ from one another. So no answer can be spotted written somewhere on the screen, and no two programs share an answer.");
  ("The title begins Remainder (%) like every other title that shows the percent sign.");
  let percent = js_operator_percent_symbol();
  function pairs_get() {
    "four of the five pairs, in a fresh order each screen";
    let candidates = [
      [15, 7],
      [20, 9],
      [25, 11],
      [21, 8],
      [24, 9],
    ];
    let pairs = list_shuffle_take(candidates, 4);
    return pairs;
  }
  let lesson = app_code_lesson_statement_names_binary({
    words: "Remainder (%) of two names",
    symbol: percent,
    pairs_get,
    example_pair: [14, 4],
    remember_lesson: app_code_lesson_expression_remainder_any,
    remember_parts: [
      "we can find the remainder (",
      percent,
      ") of dividing one number by another:",
    ],
    answer_count: null,
  });
  return lesson;
}
