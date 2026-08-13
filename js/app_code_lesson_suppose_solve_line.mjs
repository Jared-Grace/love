import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_code_lesson_suppose_solve_line(card, lead, whole) {
  "the one line that puts a line of code up as something to solve: Suppose we want to solve 3 === 5 === false";
  "said in the one place because the lesson says it twice - at the top, where it is the question the whole screen is answering, and again at the head of the walkthrough that answers it. Two copies of the sentence could drift into two ways of asking, and a learner meeting the second would look for what had changed";
  "the lead word is the caller's, because it says where this sits in the run: the first simply supposes, and each one after is another of the same, so it says And suppose";
  arguments_assert(arguments, 3);
  let opening = text_combine(lead, " we want to solve ");
  html_div_cycle_code(card, [opening, whole]);
}
