import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { app_code_lesson_statement_names_binary_pairs_balanced } from "./app_code_lesson_statement_names_binary_pairs_balanced.mjs";
import { app_code_lesson_statement_names_binary } from "./app_code_lesson_statement_names_binary.mjs";
import { app_code_lesson_expression_equals } from "./app_code_lesson_expression_equals.mjs";
export function app_code_lesson_statement_name_equal() {
  arguments_assert(arguments, 0);
  ("two names asked whether they hold the same number: let a = 7; let b = 7; console.log(a === b); writes out true");
  ("The same screen as the lesson that compares two names, with the symbol changed. Half the candidate pairs hold the same number twice and half do not, so each screen can draw two of each.");
  let symbol = js_operator_triple_equal_symbol();
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
    words: "Are two names equal",
    symbol,
    pairs_get,
    example_pair: [6, 6],
    remember_lesson: app_code_lesson_expression_equals,
    remember_parts: [
      "we can ask whether two numbers are equal (",
      symbol,
      "):",
    ],
    answer_count: 2,
  });
  return lesson;
}
