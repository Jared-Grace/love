import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_row_flex_center } from "./app_code_row_flex_center.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { app_code_arrow } from "./app_code_arrow.mjs";
export function app_code_lesson_expression_whole_part_both_above(root) {
  arguments_assert(arguments, 1);
  let intro = app_code_container_light_blue(root);
  ("Now we will find rather than Now find, because the screen does the finding here and the learner watches - the steps under this line are worked out for them. An imperative promises them a turn that does not come until the quiz, and a learner told to find something and then handed the answer stops reading for the step they were asked to take.");
  ("At once rather than in one go: the same claim in the plainest words, and one fewer idiom for a learner to have met before.");
  html_div_cycle_code(intro, [
    "Now we will find the whole part of a division at once",
  ]);
  let steps = app_code_container_light_blue(root);
  html_div_cycle_code(steps, ["Rewrite the division with the formula:"]);
  let rewrite = app_code_row_flex_center(steps);
  html_span_text_code_dark(rewrite, "14 / 4");
  app_code_arrow(rewrite);
  html_span_text_code_dark(rewrite, "Math.floor(14 / 4) * 4");
  html_div_cycle_code(steps, ["Then solve:"]);
  html_div_cycle_code(steps, [
    "",
    "Math.floor(14 / 4) * 4",
    " is ",
    "3 * 4",
    " is ",
    "12",
  ]);
  html_div_cycle_code(steps, ["So the whole part of ", "14 / 4", " is ", "12"]);
}
