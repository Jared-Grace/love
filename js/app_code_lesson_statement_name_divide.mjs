import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { app_code_lesson_statement_names_binary } from "./app_code_lesson_statement_names_binary.mjs";
import { app_code_lesson_statement_name_quotient_number_pairs } from "./app_code_lesson_statement_name_quotient_number_pairs.mjs";
import { app_code_lesson_operators_slash_forward } from "./app_code_lesson_operators_slash_forward.mjs";
export function app_code_lesson_statement_name_divide() {
  arguments_assert(arguments, 0);
  ("one name divided by another: let a = 18; let b = 3; let quotient = a / b; console.log(quotient); writes out 6");
  ("The same screen as the lessons that add, subtract and multiply two names, with the symbol changed.");
  let slash = js_operator_division_symbol();
  let lesson = app_code_lesson_statement_names_binary({
    words: "Dividing two names",
    symbol: slash,
    pairs_get: app_code_lesson_statement_name_quotient_number_pairs,
    example_pair: [12, 4],
    remember_lesson: app_code_lesson_operators_slash_forward,
    remember_parts: ["we can divide (", slash, ") one number by another:"],
    answer_name: "quotient",
    answer_count: null,
  });
  return lesson;
}
