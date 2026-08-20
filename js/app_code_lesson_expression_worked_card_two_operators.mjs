import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_worked_card_two_operators(
  root,
  whole,
  pair,
  pair_value,
  rest,
  rest_value,
) {
  arguments_assert(arguments, 6);
  (
    "the card that carries one line holding two joining marks all the way to its value: which pair is solved first, what is left of the line once it is, and what that comes to"
  );
  (
    "The middle line is written out on its own because it is the whole of what solving in the head asks for, and it is the step a learner drops when they hurry. Left out, the card jumps from a line of three parts to an answer with nothing in between."
  );
  (
    "One card rather than one per lesson, because the lessons that show two marks meeting differ in which marks and which values, never in the three steps. Written out twice they would drift, and a learner who has read one and then the other would meet the same working said two ways."
  );
  let worked = app_code_container_light_blue(root);
  html_div_cycle_code(worked, ["For ", whole, ", we do ", pair, " first"]);
  html_div_cycle_code(worked, [
    "",
    pair,
    " is ",
    pair_value,
    ", so we have ",
    rest,
  ]);
  html_div_cycle_code(worked, [
    "",
    rest,
    " is ",
    rest_value,
    ", so ",
    whole,
    " is ",
    rest_value,
  ]);
}
