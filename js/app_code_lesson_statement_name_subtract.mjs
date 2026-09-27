import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { app_code_lesson_statement_names_binary } from "./app_code_lesson_statement_names_binary.mjs";
import { app_code_lesson_statement_name_difference_number_pairs } from "./app_code_lesson_statement_name_difference_number_pairs.mjs";
import { app_code_lesson_operators_subtraction } from "./app_code_lesson_operators_subtraction.mjs";
export function app_code_lesson_statement_name_subtract() {
  arguments_assert(arguments, 0);
  ("one name taken from another: let a = 17; let b = 11; let difference = a - b; console.log(difference); writes out 6");
  ("The lesson that adds two names showed that a name may stand wherever a number stood in a sum. This one changes only the symbol, so the one thing a learner is asked to accept is that the rule was about the places and not about the plus.");
  let minus = js_operator_minus_symbol();
  let lesson = app_code_lesson_statement_names_binary({
    words: "Subtracting two names",
    symbol: minus,
    pairs_get: app_code_lesson_statement_name_difference_number_pairs,
    example_pair: [9, 4],
    remember_lesson: app_code_lesson_operators_subtraction,
    remember_parts: ["we can subtract (", minus, ") one number from another:"],
    answer_name: "difference",
    answer_count: null,
  });
  return lesson;
}
