import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or } from "./property_get_or.mjs";
export function app_code_lesson_expression_remainder_divide_qa_for(info) {
  arguments_assert(arguments, 1);
  ("forwards kinds are shown the division and answer with the formula; the backwards kind is shown the formula and answers with the % it equals");
  let is_backwards = property_get_or(info, "backwards", false);
  if (is_backwards) {
    let r = {
      question: answer,
      answer: percent_expression,
    };
    return r;
  }
  let r5 = {
    question,
    answer,
  };
  return r5;
}
