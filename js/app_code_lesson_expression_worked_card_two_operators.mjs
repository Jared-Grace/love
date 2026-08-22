import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_worked_card_two_operators(
  root,
  heading,
  whole,
  pair,
  pair_value,
  rest,
  rest_value,
) {
  arguments_assert(arguments, 7);
  ("the card that carries one line holding two joining marks all the way to its value: which pair is solved first, what is left of the line once it is, and what that comes to");
  ("The middle line is written out on its own because it is the whole of what solving in the head asks for, and it is the step a learner drops when they hurry. Left out, the card jumps from a line of three parts to an answer with nothing in between.");
  ("One card rather than one per lesson, because the lessons that show two marks meeting differ in which marks and which values, never in the three steps. Written out twice they would drift, and a learner who has read one and then the other would meet the same working said two ways.");
  ("The heading is a row put at the top of the card for a caller with something to say about this working in particular rather than about the lesson - a lesson showing two workings has a sentence to put between them. Handed nothing, no row is written, which is what a lesson showing one working asks for.");
  let heading_written = list_empty_not_is(heading);
  let worked = app_code_container_light_blue(root);
  if (heading_written) {
    html_div_cycle_code(worked, heading);
  }
  html_div_cycle_code(worked, ["For ", whole, ", we solve ", pair, " first"]);
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
