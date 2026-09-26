import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_less_than_equal_symbol } from "./js_operator_less_than_equal_symbol.mjs";
import { app_code_lesson_statement_names_binary_pairs_balanced } from "./app_code_lesson_statement_names_binary_pairs_balanced.mjs";
import { app_code_lesson_statement_names_binary } from "./app_code_lesson_statement_names_binary.mjs";
import { app_code_lesson_expression_less_than_equal } from "./app_code_lesson_expression_less_than_equal.mjs";
export function app_code_lesson_statement_name_smaller_equal() {
  arguments_assert(arguments, 0);
  ("two names compared with smaller or equal: let a = 5; let b = 5; let smaller_or_equal = a <= b; console.log(smaller_or_equal); writes out true");
  ("The same screen as the lesson that compares two names, with the symbol changed. Two of the candidate pairs hold the same number twice, because equal numbers are the whole difference between this symbol and the less than symbol.");
  let symbol = js_operator_less_than_equal_symbol();
  function pairs_get() {
    "two pairs that come out true and two that come out false, in a fresh order each screen";
    let candidates = [
      [2, 9],
      [5, 5],
      [3, 8],
      [7, 7],
      [9, 2],
      [8, 3],
      [10, 4],
      [12, 5],
    ];
    let pairs = app_code_lesson_statement_names_binary_pairs_balanced(
      symbol,
      candidates,
    );
    return pairs;
  }
  let lesson = app_code_lesson_statement_names_binary({
    words: "Is one name smaller or equal",
    symbol,
    pairs_get,
    example_pair: [4, 4],
    remember_lesson: app_code_lesson_expression_less_than_equal,
    remember_parts: [
      "we can ask whether one number is smaller than or equal to (",
      symbol,
      ") another:",
    ],
    answer_name: "smaller_or_equal",
    answer_count: 2,
  });
  return lesson;
}
