import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_code_lesson_statement_names_binary } from "./app_code_lesson_statement_names_binary.mjs";
import { app_code_lesson_operators_subtraction } from "./app_code_lesson_operators_subtraction.mjs";
export function app_code_lesson_statement_name_subtract() {
  arguments_assert(arguments, 0);
  ("one name taken from another: let a = 17; let b = 11; console.log(a - b); writes out 6");
  ("The lesson that adds two names showed that a name may stand wherever a number stood in a sum. This one changes only the symbol, so the one thing a learner is asked to accept is that the rule was about the places and not about the plus.");
  ("Every first number is larger than every second number, so no answer is below zero - a negative answer would be a second new thing on a screen about names.");
  ("Every written number is ten or more and every answer is below ten, and the five answers differ from one another. So a question offering four programs cannot be answered by spotting its answer written somewhere on the screen, and no two programs share an answer.");
  let minus = js_operator_minus_symbol();
  function pairs_get() {
    "four of the five pairs, in a fresh order each screen";
    let candidates = [
      [17, 11],
      [15, 12],
      [19, 10],
      [18, 13],
      [16, 14],
    ];
    let pairs = list_shuffle_take(candidates, 4);
    return pairs;
  }
  let lesson = app_code_lesson_statement_names_binary({
    words: "Subtracting two names",
    symbol: minus,
    pairs_get,
    example_pair: [9, 4],
    remember_lesson: app_code_lesson_operators_subtraction,
    remember_parts: ["we can subtract (", minus, ") one number from another:"],
    answer_count: null,
  });
  return lesson;
}
