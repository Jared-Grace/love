import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { app_code_lesson_statement_names_binary_answer_lines } from "./app_code_lesson_statement_names_binary_answer_lines.mjs";
import { list_first } from "./list_first.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
export function app_code_lesson_statement_names_binary_title_name_id(
  words,
  symbol,
  answer_name,
) {
  "$plain words";
  "$plain symbol";
  "$plain answer_name";
  "A home title saying these words, followed by the first line that uses the two lesson names with this symbol between them - the line that writes it out, or the line that gives it a name when the lesson names its answer.";
  "The lessons show that same line and differ in the middle of it - one adds what the two names hold, another asks which of them is smaller. The names stand in the same two places in all of them; only what is being asked of them has changed, and asking it is the one thing handed in here.";
  "The words are handed in beside the symbol rather than worked out from it, because what a title says is written for a learner and not derived from a piece of punctuation.";
  arguments_assert(arguments, 3);
  let name_first = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  let asked = js_code_binary_spaced_nb(name_first, symbol, name_last);
  let answer_lines = app_code_lesson_statement_names_binary_answer_lines(
    asked,
    answer_name,
  );
  let code = list_first(answer_lines);
  let built = app_code_lesson_statement_title_name_id(words, code);
  return built;
}
