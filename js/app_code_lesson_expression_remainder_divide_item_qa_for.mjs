import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { list_get } from "./list_get.mjs";
import { property_get } from "./property_get.mjs";
import { text_integers } from "./text_integers.mjs";
export function app_code_lesson_expression_remainder_divide_item_qa_for(item) {
  "Remaps one line out of this lesson's batch the way the backwards quiz remaps the pair it puts on the screen: the remainder formula becomes the question, and the % it is equal to becomes the answer.";
  "The wrong answers a multiple choice offers are drawn from the lesson's own other questions, and they are read off each one by property name. The backwards quiz shows a formula and is answered with a %, but the batch it draws from answers with a formula, so without this it would fill its buttons with formulas - and one of those buttons would be the very formula the learner is being asked about. Picking the line they were asked to match would be marked wrong.";
  "The % is worked out from the division the same way the quiz works out its own, rather than being carried along, because a batch line only ever spells the division and the formula.";
  let question = property_get(item, "question");
  let answer = property_get(item, "answer");
  let nums = text_integers(question);
  let dividend = list_get(nums, 0);
  let divisor = list_get(nums, 1);
  let percent_expression = js_code_binary_spaced_nb(dividend, "%", divisor);
  let r = {
    question: answer,
    answer: percent_expression,
  };
  return r;
}
