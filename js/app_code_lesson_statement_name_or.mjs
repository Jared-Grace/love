import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_code_lesson_statement_names_binary } from "./app_code_lesson_statement_names_binary.mjs";
import { app_code_lesson_expression_or } from "./app_code_lesson_expression_or.mjs";
export function app_code_lesson_statement_name_or() {
  arguments_assert(arguments, 0);
  ("two names joined with or: let a = true; let b = false; let a_or_b = a || b; console.log(a_or_b); writes out true");
  ("The answer is named a_or_b and not at_least_1_true. A learner asked what at_least_1_true meant and needed it explained, and a name that needs explaining is a second thing to learn on a screen about the symbol; a_or_b reads back as the line it came from.");
  ("The same screen as the lesson that joins two names with and, with the symbol changed. Every screen asks all four pairs of true and false, and only one of the four comes out false, which is the thing this symbol is: false only when both sides are.");
  let symbol = js_operator_or_symbol();
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
    words: "Two names joined with or",
    symbol,
    pairs_get,
    example_pair: [false, true],
    remember_lesson: app_code_lesson_expression_or,
    remember_parts: [
      "we can ask whether at least one side is true (",
      symbol,
      "):",
    ],
    answer_name: "a_or_b",
    answer_count: 2,
  });
  return lesson;
}
