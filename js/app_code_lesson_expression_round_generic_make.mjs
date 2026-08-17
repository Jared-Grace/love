import { text_decimal_combine } from "./text_decimal_combine.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { integer_even_is } from "./integer_even_is.mjs";
import { integer_random } from "./integer_random.mjs";
import { text_to } from "./text_to.mjs";
import { app_code_lesson_expression_round_generic_code } from "./app_code_lesson_expression_round_generic_code.mjs";
export function app_code_lesson_expression_round_generic_make(
  whole,
  index,
  called_name,
) {
  arguments_assert(arguments, 3);
  ("alternate down the batch, the DECIMAL first because rounding is the main use: even positions are a decimal to round, odd positions are an already-whole number (nothing to round) - so the batch leads with the main rounding case and still drills the no-change edge case");
  let decimal_question = integer_even_is(index);
  let inner = null;
  if (decimal_question) {
    let digit = integer_random(1, 9);
    inner = text_decimal_combine(whole, digit);
  } else {
    inner = text_to(whole);
  }
  let r = app_code_lesson_expression_round_generic_code(inner, called_name);
  return r;
}
