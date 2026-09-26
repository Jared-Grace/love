import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { app_code_lesson_statement_names_binary } from "./app_code_lesson_statement_names_binary.mjs";
import { app_code_lesson_statement_name_sum_number_pairs } from "./app_code_lesson_statement_name_sum_number_pairs.mjs";
import { app_code_lesson_functions_console_log_arithmetic } from "./app_code_lesson_functions_console_log_arithmetic.mjs";
export function app_code_lesson_statement_name_sum() {
  arguments_assert(arguments, 0);
  ("two names added together: let a = 2; let b = 3; console.log(a + b); writes out 5");
  ("The copying screen read a name on the right of an equals and said what that means: a name may be written wherever a value may be written, and what gets used is whatever the name is holding. Here that same sentence is met in the one place it has not been seen yet - inside an expression, where a number has stood in every arithmetic lesson the learner has done.");
  ("So the new fact is not a new rule. It is the rule from the copying screen reaching a position, and the whole screen exists because a learner who has only ever seen a name handed straight to console.log has no reason yet to believe the name will be read when something else is being done with it.");
  ("Both places hold names rather than one name and one number. The two sides of a sum are the same kind of place, so a learner shown a name in only one of them has been left the question of whether the other one is different - and answering it costs a whole screen that this one can answer for free.");
  ("Numbers rather than the words the screens before use. A plus between two pieces of text does something a learner has never been told about, and it would be the second new thing on a screen that has one; a plus between two numbers is the sum they have solved since the operators lessons.");
  ("The same screen as every other lesson that puts one symbol between two names, at the human's asking, so the wording a learner reads here is the wording they read on each of the others. The pairs stay the ones the lessons after this one ask again with one more line.");
  let plus = js_operator_plus_symbol();
  let lesson = app_code_lesson_statement_names_binary({
    words: "Adding two names",
    symbol: plus,
    pairs_get: app_code_lesson_statement_name_sum_number_pairs,
    example_pair: [2, 3],
    remember_lesson: app_code_lesson_functions_console_log_arithmetic,
    remember_parts: ["we can add (", plus, ") two numbers together:"],
    answer_name: null,
    answer_count: null,
  });
  return lesson;
}
