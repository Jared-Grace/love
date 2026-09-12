import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_written_shapes_numbers } from "./app_code_expression_written_shapes_numbers.mjs";
import { app_code_expression_written_shapes_truths } from "./app_code_expression_written_shapes_truths.mjs";
import { app_code_expression_written_shapes_unpressed } from "./app_code_expression_written_shapes_unpressed.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
export function app_code_expression_written_shapes() {
  arguments_assert(arguments, 0);
  ("every shape to hold a printed line against: the arithmetic ones, the ones that come out true or false, and the ones built with the two operators no lesson ever puts under a press");
  ("Three parts because each is built from a different class of operator and read by different eyes when one of them fails, not because any is optional. Whatever asks here gets all three, so a part cannot be left out of a sweep by being forgotten at the call.");
  ("A shape a lesson builds today is not what this is a list of. It is a list of every way the printer can be asked to write a line, which is wider on purpose: a lesson added next month prints through the same printer, and a check covering only today's lessons would have to be widened by whoever adds it.");
  ("The unpressed part is what closes the gap between the two. The remainder sign and the power sign each have a lesson of their own, but those lessons write a flat one-operator line out as text and never build a shape to press apart - so the printer had never once been asked to write either sign, and nothing said so. The operators a shape MAY hold and the operators any lesson presses were never the same set, and the difference was where both printing faults lived.");
  let numbers = app_code_expression_written_shapes_numbers();
  let truths = app_code_expression_written_shapes_truths();
  let unpressed = app_code_expression_written_shapes_unpressed();
  let parts = [numbers, truths, unpressed];
  let shapes = list_concat_multiple(parts);
  return shapes;
}
