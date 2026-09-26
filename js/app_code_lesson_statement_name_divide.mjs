import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_code_lesson_statement_names_binary } from "./app_code_lesson_statement_names_binary.mjs";
import { app_code_lesson_operators_slash_forward } from "./app_code_lesson_operators_slash_forward.mjs";
export function app_code_lesson_statement_name_divide() {
  arguments_assert(arguments, 0);
  ("one name divided by another: let a = 18; let b = 3; let quotient = a / b; console.log(quotient); writes out 6");
  ("The same screen as the lessons that add, subtract and multiply two names, with the symbol changed.");
  ("Every pair divides with nothing left over, so every answer is a whole number - a decimal answer would be a second new thing on a screen about names. The five answers differ from one another and none of them is written anywhere in a program, so no answer can be spotted rather than worked out.");
  let slash = js_operator_division_symbol();
  function pairs_get() {
    "four of the five pairs, in a fresh order each screen";
    let candidates = [
      [20, 4],
      [18, 3],
      [14, 2],
      [24, 3],
      [18, 2],
    ];
    let pairs = list_shuffle_take(candidates, 4);
    return pairs;
  }
  let lesson = app_code_lesson_statement_names_binary({
    words: "Dividing two names",
    symbol: slash,
    pairs_get,
    example_pair: [12, 4],
    remember_lesson: app_code_lesson_operators_slash_forward,
    remember_parts: ["we can divide (", slash, ") one number by another:"],
    answer_name: "quotient",
    answer_count: null,
  });
  return lesson;
}
