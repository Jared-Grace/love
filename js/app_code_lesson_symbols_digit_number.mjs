import { app_code_symbols_separated_on_question_numbered } from "./app_code_symbols_separated_on_question_numbered.mjs";
import { app_code_lesson_symbols_batch_digits } from "./app_code_lesson_symbols_batch_digits.mjs";
import { integer_random } from "./integer_random.mjs";
import { integer_positive_random_digits_text } from "./integer_positive_random_digits_text.mjs";
import { text_to } from "./text_to.mjs";
import { text_split_empty } from "./text_split_empty.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_bold } from "./html_bold.mjs";
import { html_div } from "./html_div.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_lesson_symbols_counting } from "./app_code_lesson_symbols_counting.mjs";
import { app_code_lesson_name_id } from "./app_code_lesson_name_id.mjs";
export function app_code_lesson_symbols_digit_number() {
  "the digit-vs-number lesson - a real student confused the two: a digit is one symbol 0-9, a number is made of one or more digits (42 is a number made of the two digits 4 and 2); the quiz counts the digits in a number, reusing the counting quiz";
  let name_id = app_code_lesson_name_id("symbols", ["digits in a number"]);
  let r = app_code_lesson_symbols_counting(
    name_id,
    above,
    app_code_lesson_symbols_batch_digits,
    app_code_symbols_separated_on_question_numbered,
  );
  return r;
  function above(root) {
    "example FIRST - a concrete multi-digit number and the digits it is made of - THEN the general rule; digits was defined in the previous lesson so it is not re-bolded, number is the newly-clarified term and is bolded once at its definition";
    let count = integer_random(2, 3);
    let number_text = integer_positive_random_digits_text(count);
    let count_text = text_to(count);
    let chars = text_split_empty(number_text);
    let chars_joined = list_join_comma_space(chars);
    let example_box = app_code_container_light_blue(root);
    html_div_cycle_code(example_box, ["", number_text, " is a number"]);
    html_div_cycle_code(example_box, [
      "It is made of ",
      count_text,
      " digits: ",
      chars_joined,
    ]);
    let rule_box = app_code_container_light_blue(root);
    let rule_line = html_div(rule_box);
    html_span_text(rule_line, "A ");
    let number_term = html_span_text(rule_line, "number");
    html_bold(number_term);
    html_span_text(rule_line, " is made of one or more digits");
    html_div_cycle_code(rule_box, [
      "A digit is one of the ten symbols ",
      "0",
      " to ",
      "9",
    ]);
  }
}
