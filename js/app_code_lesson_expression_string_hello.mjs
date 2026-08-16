import { app_code_lesson_expression_string_hello_above } from "./app_code_lesson_expression_string_hello_above.mjs";
import { js_string_quote } from "./js_string_quote.mjs";
import { app_code_lesson_expression_string_hello_title_name_id } from "./app_code_lesson_expression_string_hello_title_name_id.mjs";
import { app_code_lesson_expression_string_generic } from "./app_code_lesson_expression_string_generic.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
export function app_code_lesson_expression_string_hello() {
  "practice a string - text written inside quotes, the first value that is not a number. A quoted word evaluates to the text WITHOUT the quotes: the quotes are how you write it, not part of the value; the answer is the text with no quotes. The word source is the fruits of the Spirit.";
  let quote = js_string_quote();
  function decoys(question, answer) {
    "the classic mistake is thinking the quotes are part of the value, so the tailored wrong answer is the same text WITH the quotes still around it";
    let quoted = app_code_string_code(answer);
    let r = [quoted];
    return r;
  }
  let name_id = app_code_lesson_expression_string_hello_title_name_id();
  let lesson = app_code_lesson_expression_string_generic({
    words_get: fruits_of_the_spirit,
    decoys,
    above,
    name_id,
  });
  return lesson;
  function above(root) {
    let r2 = app_code_lesson_expression_string_hello_above(root, quote);
    return r2;
  }
}
