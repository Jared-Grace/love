import { app_code_lesson_expression_comparison } from "./app_code_lesson_expression_comparison.mjs";
import { app_code_comparison_pair_ordering } from "./app_code_comparison_pair_ordering.mjs";
import { js_operator_greater_than_equal } from "./js_operator_greater_than_equal.mjs";
import { js_operator_greater_than } from "./js_operator_greater_than.mjs";
import { js_operator_less_than } from "./js_operator_less_than.mjs";
import { js_operator_triple_equal } from "./js_operator_triple_equal.mjs";
import { js_operator_or } from "./js_operator_or.mjs";
import { less_than } from "./less_than.mjs";
import { integer_random } from "./integer_random.mjs";
import { app_code_lesson_operators_value_max } from "./app_code_lesson_operators_value_max.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_expression_greater_than_equal() {
  let operator = js_operator_greater_than_equal();
  let symbol = property_get(operator, "operator");
  let greater_symbol = property_get(js_operator_greater_than(), "operator");
  let less_symbol = property_get(js_operator_less_than(), "operator");
  let equal_symbol = property_get(js_operator_triple_equal(), "operator");
  let or_symbol = js_operator_or();
  let explanation = [
    [
      "if ",
      greater_symbol,
      " is ",
      js_keyword_true(),
      ", then ",
      symbol,
      " is ",
      js_keyword_true(),
    ],
    [
      "if ",
      equal_symbol,
      " is ",
      js_keyword_true(),
      ", then ",
      symbol,
      " is ",
      js_keyword_true(),
    ],
    [
      "if ",
      less_symbol,
      " is ",
      js_keyword_true(),
      ", then ",
      symbol,
      " is ",
      js_keyword_false(),
    ],
  ];
  function closing(fn_name) {
    let parts = [
      "",
      symbol,
      " is like ",
      greater_symbol,
      " ",
      or_symbol,
      " ",
      equal_symbol,
    ];
    return parts;
  }
  let next_arg = examples();
  let lesson = app_code_lesson_expression_comparison({
    operator,
    question_middle: "greater than or equal to",
    name_id_rights: [" greater than or equal to"],
    closing,
    preamble: null,
    explanation,
    next_arg,
    example_count: 3,
  });
  return lesson;
  function examples() {
    "show all THREE relations together on every screen so the distinguishing case (greater -> true, which === would make false) is never hidden: [equal (true), greater (true), less (false)]";
    let ordering = app_code_comparison_pair_ordering(less_than);
    let max = app_code_lesson_operators_value_max();
    function equal_pair() {
      let n = integer_random(1, max);
      let coordinates = {
        left: n,
        right: n,
      };
      return coordinates;
    }
    function code_of(coordinates) {
      let left = property_get(coordinates, "left");
      let right = property_get(coordinates, "right");
      let code = js_code_binary_spaced_nb(left, symbol, right);
      return code;
    }
    function refill() {
      let equal = code_of(equal_pair());
      let greater = code_of(ordering(false));
      let less = code_of(ordering(true));
      let list = [equal, greater, less];
      return list;
    }
    let next_arg = list_iterator_refillable(refill);
    return next_arg;
  }
}
