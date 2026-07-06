import { each } from "../../../love/public/src/each.mjs";
import { js_code_call_args } from "../../../love/public/src/js_code_call_args.mjs";
import { js_operator_plus_verb } from "../../../love/public/src/js_operator_plus_verb.mjs";
import { js_code_binary_spaced_nb } from "../../../love/public/src/js_code_binary_spaced_nb.mjs";
import { js_operator_plus } from "../../../love/public/src/js_operator_plus.mjs";
import { digits_positive_shuffled_next } from "../../../love/public/src/digits_positive_shuffled_next.mjs";
import { html_div_cycle_code } from "../../../love/public/src/html_div_cycle_code.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_symbol_separated } from "../../../love/public/src/app_code_symbol_separated.mjs";
import { app_code_lesson_symbols_batches_generic } from "../../../love/public/src/app_code_lesson_symbols_batches_generic.mjs";
import { app_code_label_symbols } from "../../../love/public/src/app_code_label_symbols.mjs";
import { text_size } from "../../../love/public/src/text_size.mjs";
import { app_code_lesson_symbols_batch_digits } from "../../../love/public/src/app_code_lesson_symbols_batch_digits.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
export function app_code_lesson_functions_arithmetic() {
  let name = "Functions (Arithmetic)";
  let id = "functions_arithmetic";
  const example_label = "Number of symbols: ";
  const quiz_label = "How many symbols are there? ";
  let symbols_to_answer = text_size;
  let question_label = app_code_label_symbols();
  let r = app_code_lesson_symbols_batches_generic(
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
  return r;
  function above(root) {
    let operators = [
      {
        verb: js_operator_plus(),
        operator: js_operator_plus(),
      },
    ];
    function lambda(item) {
      let next = digits_positive_shuffled_next();
      let left = next();
      let right = next();
      let operator = js_operator_plus();
      let verb = js_operator_plus_verb();
      let combined = js_code_binary_spaced_nb(left, operator, right);
      let c = app_code_container_light_blue(root);
      let code = js_code_call_args(verb, [left, right]);
      html_div_cycle_code(c, [
        "Instead of ",
        combined,
        " we could write: ",
        code,
      ]);
    }
    each(operators, lambda);
  }
}
