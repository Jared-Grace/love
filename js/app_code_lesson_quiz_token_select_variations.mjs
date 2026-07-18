import { js_tokenizer_normalized } from "./js_tokenizer_normalized.mjs";
import { js_tokens_to_code } from "./js_tokens_to_code.mjs";
import { eval_console_log_to_list } from "./eval_console_log_to_list.mjs";
import { list_permutations } from "./list_permutations.mjs";
import { each } from "./each.mjs";
import { each_index } from "./each_index.mjs";
import { range } from "./range.mjs";
import { list_add } from "./list_add.mjs";
import { list_get } from "./list_get.mjs";
import { list_size } from "./list_size.mjs";
import { list_first } from "./list_first.mjs";
import { list_includes } from "./list_includes.mjs";
import { equal } from "./equal.mjs";
import { equal_0 } from "./equal_0.mjs";
import { modulo } from "./modulo.mjs";
import { less_than } from "./less_than.mjs";
import { and } from "./and.mjs";
import { not } from "./not.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_quiz_token_select_variations(code) {
  "every arrangement of the code's tokens that produces the SAME output - the unscramble asks the learner to build code for a given output, so any rearrangement that prints the same value is a correct answer; the expression is flat (number operator number operator ...), so numbers sit on even token positions and operators on odd, and we permute each group into its own positions, then keep the arrangements whose output matches";
  let tokens = js_tokenizer_normalized(code);
  let numbers = [];
  let operators = [];
  function classify(token, index) {
    let is_number = equal_0(modulo(index, 2));
    if (is_number) {
      list_add(numbers, token);
    } else {
      list_add(operators, token);
    }
  }
  each_index(tokens, classify);
  function interleave(number_order, operator_order) {
    "rebuild a flat expression: number, operator, number, operator, ..., number";
    let result = [];
    function add_pair(index) {
      list_add(result, list_get(number_order, index));
      let has_operator = less_than(index, list_size(operator_order));
      if (has_operator) {
        list_add(result, list_get(operator_order, index));
      }
    }
    each(range(list_size(number_order)), add_pair);
    return result;
  }
  function output_text(expression) {
    let call = text_combine_multiple(["console.log(", expression, ")"]);
    let logs = eval_console_log_to_list(call);
    let first = list_first(logs);
    return text_to(first);
  }
  let target = output_text(code);
  let number_orders = list_permutations(numbers);
  let operator_orders = list_permutations(operators);
  let seen = [];
  let variations = [];
  function for_number_order(number_order) {
    function for_operator_order(operator_order) {
      let arrangement = interleave(number_order, operator_order);
      let arrangement_code = js_tokens_to_code(arrangement);
      let same_output = equal(output_text(arrangement_code), target);
      let already = list_includes(seen, arrangement_code);
      let keep = and(same_output, not(already));
      if (keep) {
        list_add(seen, arrangement_code);
        list_add(variations, arrangement);
      }
    }
    each(operator_orders, for_operator_order);
  }
  each(number_orders, for_number_order);
  return variations;
}
