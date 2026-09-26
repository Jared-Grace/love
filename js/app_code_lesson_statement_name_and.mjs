import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_code_lesson_statement_names_binary } from "./app_code_lesson_statement_names_binary.mjs";
import { app_code_lesson_expression_and } from "./app_code_lesson_expression_and.mjs";
export function app_code_lesson_statement_name_and() {
  arguments_assert(arguments, 0);
  ("two names joined with and: let a = true; let b = false; console.log(a && b); writes out false");
  ("The same screen as the lessons that put a symbol between two names, with names holding true or false instead of numbers - a name holding true or false was met in the Statements lessons already.");
  ("Two true or false values can be paired only four ways, so every screen asks all four in a fresh order. Only one of the four comes out true, which is the thing this symbol is: true only when both sides are.");
  let symbol = js_operator_and_symbol();
  function pairs_get() {
    "all four pairs of true and false, in a fresh order each screen";
    let candidates = [
      [true, true],
      [true, false],
      [false, true],
      [false, false],
    ];
    let pairs = list_shuffle_take(candidates, 4);
    return pairs;
  }
  let lesson = app_code_lesson_statement_names_binary({
    words: "Two names joined with and",
    symbol,
    pairs_get,
    example_pair: [true, false],
    remember_lesson: app_code_lesson_expression_and,
    remember_parts: ["we can ask whether both sides are true (", symbol, "):"],
    answer_count: 2,
  });
  return lesson;
}
