import { app_code_expression_operator_chip } from "./app_code_expression_operator_chip.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
export function app_code_expression_refusals_clear(spans) {
  arguments_assert(arguments, 1);
  ("give back their plain chip to every operator a learner was refused on this line, so nothing on it is still marked red");
  ("A red mark says this one cannot go YET. Once the operator that could go has been chosen, the yet is over: the line is about to become a shorter one, and a red still standing on it says of the new line something that was only ever true of the old one.");
  ("It also stops the learner reading the red as a running tally of their mistakes. It was an answer to one press, and an answer is finished with when the question it answered has been answered rightly.");
  each(spans, app_code_expression_operator_chip);
}
