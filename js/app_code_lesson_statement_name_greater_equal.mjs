import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_greater_than_equal_symbol } from "./js_operator_greater_than_equal_symbol.mjs";
import { app_code_lesson_statement_names_binary_pairs_balanced } from "./app_code_lesson_statement_names_binary_pairs_balanced.mjs";
import { app_code_lesson_statement_names_binary } from "./app_code_lesson_statement_names_binary.mjs";
import { app_code_lesson_expression_greater_than_equal } from "./app_code_lesson_expression_greater_than_equal.mjs";
export function app_code_lesson_statement_name_greater_equal() {
  arguments_assert(arguments, 0);
  ("two names compared with larger or equal: let a = 5; let b = 5; let bigger_or_equal = a >= b; console.log(bigger_or_equal); writes out true");
  ("The same screen as the lesson that compares two names, with the symbol changed. Two of the candidate pairs hold the same number twice, because equal numbers are the whole difference between this symbol and the greater than symbol.");
  let symbol = js_operator_greater_than_equal_symbol();
  function pairs_get() {
    "two pairs that come out true and two that come out false, in a fresh order each screen";
    let candidates = [
      [9, 2],
      [5, 5],
      [8, 3],
      [7, 7],
      [2, 9],
      [3, 8],
      [4, 10],
      [5, 12],
    ];
    let pairs = app_code_lesson_statement_names_binary_pairs_balanced(
      symbol,
      candidates,
    );
    return pairs;
  }
  let lesson = app_code_lesson_statement_names_binary({
    words: "Is one name larger or equal",
    symbol,
    pairs_get,
    example_pair: [4, 4],
    remember_lesson: app_code_lesson_expression_greater_than_equal,
    remember_parts: [
      "we can ask whether one number is larger than or equal to (",
      symbol,
      ") another:",
    ],
    answer_name: "bigger_or_equal",
    answer_count: 2,
  });
  return lesson;
}
