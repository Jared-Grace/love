import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_bang_double_equal_symbol } from "./js_operator_bang_double_equal_symbol.mjs";
import { app_code_lesson_statement_names_binary_pairs_balanced } from "./app_code_lesson_statement_names_binary_pairs_balanced.mjs";
import { app_code_lesson_statement_names_binary } from "./app_code_lesson_statement_names_binary.mjs";
import { app_code_lesson_expression_not_equal } from "./app_code_lesson_expression_not_equal.mjs";
export function app_code_lesson_statement_name_not_equal() {
  arguments_assert(arguments, 0);
  ("two names asked whether they hold different numbers: let a = 7; let b = 4; console.log(a !== b); writes out true");
  ("The same screen as the lesson that asks whether two names are equal, with the symbol changed, so the same pairs now answer the other way.");
  let symbol = js_operator_bang_double_equal_symbol();
  function pairs_get() {
    "two pairs that come out true and two that come out false, in a fresh order each screen";
    let candidates = [
      [5, 5],
      [7, 7],
      [3, 3],
      [8, 8],
      [5, 6],
      [7, 4],
      [3, 9],
      [8, 2],
    ];
    let pairs = app_code_lesson_statement_names_binary_pairs_balanced(
      symbol,
      candidates,
    );
    return pairs;
  }
  let lesson = app_code_lesson_statement_names_binary({
    words: "Are two names not equal",
    symbol,
    pairs_get,
    example_pair: [6, 2],
    remember_lesson: app_code_lesson_expression_not_equal,
    remember_parts: [
      "we can ask whether two numbers are not equal (",
      symbol,
      "):",
    ],
    answer_count: 2,
  });
  return lesson;
}
