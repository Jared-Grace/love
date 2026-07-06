import { js_operator_asterisk_verb } from "../../../love/public/src/js_operator_asterisk_verb.mjs";
import { js_operator_asterisk } from "../../../love/public/src/js_operator_asterisk.mjs";
import { js_operator_division_verb } from "../../../love/public/src/js_operator_division_verb.mjs";
import { js_operator_division } from "../../../love/public/src/js_operator_division.mjs";
import { js_operator_minus_verb } from "../../../love/public/src/js_operator_minus_verb.mjs";
import { js_operator_minus } from "../../../love/public/src/js_operator_minus.mjs";
import { js_operator_plus_verb } from "../../../love/public/src/js_operator_plus_verb.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { js_code_call_args } from "../../../love/public/src/js_code_call_args.mjs";
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
    let operators = js_operators();
    function lambda(o) {
      let operator = property_get(o, "operator");
      let verb = property_get(o, "verb");
      let next = digits_positive_shuffled_next();
      let left = next();
      let right = next();
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
function js_operators() {
  return [
    {
      verb: js_operator_plus(),
      operator: js_operator_plus_verb(),
    },
    {
      verb: js_operator_minus(),
      operator: js_operator_minus_verb(),
    },
    {
      verb: js_operator_division(),
      operator: js_operator_division_verb(),
    },
    {
      verb: js_operator_asterisk(),
      operator: js_operator_asterisk_verb(),
    },
  ];
}

