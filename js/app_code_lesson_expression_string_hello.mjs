import { js_string_quote } from "./js_string_quote.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_learn_js_lesson_expression_string_hello_title_name_id } from "./app_learn_js_lesson_expression_string_hello_title_name_id.mjs";
import { app_learn_js_lesson_expression_string_generic } from "./app_learn_js_lesson_expression_string_generic.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { app_learn_js_lesson_expression_string_hello_above } from "./app_learn_js_lesson_expression_string_hello_above.mjs";
export function app_code_lesson_expression_string_hello() {
  "practice a string - text written inside quotes, the first value that is not a number. A quoted word evaluates to the text WITHOUT the quotes: the quotes are how you write it, not part of the value; the answer is the text with no quotes. The word source is the fruits of the Spirit.";
  let quote = js_string_quote();
  function decoys(question, answer) {
    "the classic mistake is thinking the quotes are part of the value, so the tailored wrong answer is the same text WITH the quotes still around it";
    "The other two wrong answers keep one of the two quote marks, as the backward wrong answers do. All three hold the word on the screen. Filled from the other questions the rest held other words, so the two buttons with the word on the screen were the only ones to look at. Not picked: the word in other capitals, which has nothing to do with quotes.";
    let quoted = app_code_string_code(answer);
    let opened = text_combine_multiple([quote, answer]);
    let closed = text_combine_multiple([answer, quote]);
    let r = [quoted, opened, closed];
    return r;
  }
  ("Reading backwards the wrong answers hold the same word as the right one. Filled from the other questions they each held another word, so the one button with the word on the screen was the answer and could be picked without knowing a thing about strings.");
  ("They are the word with no quote marks, which is the same mistake as the forward wrong answer turned around, and the word with only one of its two quote marks. Each is ruled out by the one fact this lesson gives, that a string is text in quotes, so no error has to have been met. Not picked: the word with changed capitals or a space added, because those ask for careful reading of the word and not for what quote marks do, and a space is the next lesson.");
  function backwards_decoys(question, answer) {
    "the word with no quote marks, with only the opening one, and with only the closing one";
    let opened = text_combine_multiple([quote, question]);
    let closed = text_combine_multiple([question, quote]);
    let found = [question, opened, closed];
    return found;
  }
  let name_id = app_learn_js_lesson_expression_string_hello_title_name_id();
  let lesson = app_learn_js_lesson_expression_string_generic({
    words_get: fruits_of_the_spirit,
    decoys,
    backwards_decoys,
    above,
    name_id,
  });
  return lesson;
  function above(root) {
    let r2 = app_learn_js_lesson_expression_string_hello_above(root, quote);
    return r2;
  }
}
