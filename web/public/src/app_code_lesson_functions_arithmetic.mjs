import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
import { digits_positive } from "../../../love/public/src/digits_positive.mjs";
import { list_iterator_refillable } from "../../../love/public/src/list_iterator_refillable.mjs";
import { html_div_cycle_code } from "../../../love/public/src/html_div_cycle_code.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_symbol_separated } from "../../../love/public/src/app_code_symbol_separated.mjs";
import { app_code_lesson_symbols_batches_generic } from "../../../love/public/src/app_code_lesson_symbols_batches_generic.mjs";
import { app_code_label_symbols } from "../../../love/public/src/app_code_label_symbols.mjs";
import { text_size } from "../../../love/public/src/text_size.mjs";
import { app_code_lesson_symbols_batch_digits } from "../../../love/public/src/app_code_lesson_symbols_batch_digits.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
export function app_code_lesson_functions_arithmetic() {
  const example_label = "Number of symbols: ";
  const quiz_label = "How many symbols are there? ";
  let symbols_to_answer = text_size;
  let question_label = app_code_label_symbols();
  let r5 = app_code_lesson_symbols_batches_generic(
    name,
    id,
    above,
    noop,
    app_code_lesson_symbols_batch_digits,
    example_label,
    quiz_label,
    symbols_to_answer,
    1,
    app_code_symbol_separated,
    question_label,
  );
  let name = "Functions (Arithmetic)";
  let id = "functions_arithmetic";
  return r5;
  function above(root) {
    let dps = digits_positive();
    list_shuffle(list);
    let next_get_list = list_iterator_refillable(refill_get);
    let c = app_code_container_light_blue(root);
    html_div_cycle_code(c, ["Instead of "]);
  }
}
