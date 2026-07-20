import { app_code_lesson_operand_generic } from "./app_code_lesson_operand_generic.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { integer_random } from "./integer_random.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { add } from "./add.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { text_to } from "./text_to.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_code_lesson_expression_dividend() {
  "identify the DIVIDEND (the number being divided) in a division a / b - the divisor b stands as the decoy; a thin lesson over app_code_lesson_operand_generic";
  function make(divisor) {
    "a division whose dividend is quotient*divisor + a leftover, so it is an uneven division; the answer is the dividend and the divisor is the decoy button";
    let quotient = integer_random(2, 3);
    let leftover = integer_random(1, subtract(divisor, 1));
    let dividend = add(multiply(quotient, divisor), leftover);
    let question = js_code_binary_spaced_nb(dividend, "/", divisor);
    let answer = text_to(dividend);
    return {
      question,
      answer,
    };
  }
  function batch_get() {
    "four divisions, each with a DIFFERENT divisor so the questions never look alike";
    let divisors = list_shuffle_take([3, 4, 5, 6], 4);
    return list_map(divisors, make);
  }
  let name_id = title_name_id();
  return app_code_lesson_operand_generic({
    role: "dividend",
    define_prose: "When you divide, the number you divide is the ",
    batch_get,
    name_id,
    unscramble: true,
  });
  function title_name_id() {
    "the home title is console.log dividend";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text(parent, "Dividend");
      }
      return render;
    }
    return app_code_lesson_name_id_generic(["dividend"], "operators", title_get);
  }
}
