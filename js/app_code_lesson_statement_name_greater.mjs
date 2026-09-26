import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_greater_than_symbol } from "./js_operator_greater_than_symbol.mjs";
import { app_code_lesson_statement_names_binary_pairs_balanced } from "./app_code_lesson_statement_names_binary_pairs_balanced.mjs";
import { app_code_lesson_statement_names_binary } from "./app_code_lesson_statement_names_binary.mjs";
import { app_code_lesson_expression_greater_than } from "./app_code_lesson_expression_greater_than.mjs";
export function app_code_lesson_statement_name_greater() {
  arguments_assert(arguments, 0);
  ("two names compared the other way: let a = 9; let b = 2; console.log(a > b); writes out true");
  ("The same screen as the lesson that compares two names with the less than symbol, with the symbol turned round. Only two answers exist, so a question offers two buttons, and each screen draws two programs that come out true and two that come out false.");
  let symbol = js_operator_greater_than_symbol();
  function pairs_get() {
    "two pairs that come out true and two that come out false, in a fresh order each screen";
    let candidates = [
      [9, 2],
      [8, 3],
      [7, 1],
      [10, 4],
      [2, 9],
      [3, 8],
      [1, 7],
      [4, 10],
    ];
    let pairs = app_code_lesson_statement_names_binary_pairs_balanced(
      symbol,
      candidates,
    );
    return pairs;
  }
  let lesson = app_code_lesson_statement_names_binary({
    words: "Is one name larger",
    symbol,
    pairs_get,
    example_pair: [5, 3],
    remember_lesson: app_code_lesson_expression_greater_than,
    remember_parts: [
      "we can ask whether one number is larger (",
      symbol,
      ") than another:",
    ],
    answer_count: 2,
  });
  return lesson;
}
