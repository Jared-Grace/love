import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_written_shapes_numbers } from "./app_code_expression_written_shapes_numbers.mjs";
import { app_code_expression_written_shapes_truths } from "./app_code_expression_written_shapes_truths.mjs";
import { list_concat } from "./list_concat.mjs";
export function app_code_expression_written_shapes() {
  arguments_assert(arguments, 0);
  ("every shape to hold a printed line against: the arithmetic ones and the ones that come out true or false");
  ("Two halves because the two are built from different classes of operator and are read by different eyes when one of them fails, not because either is optional. Whatever asks here gets both, so a half cannot be left out of a sweep by being forgotten at the call.");
  ("A shape a lesson builds today is not what this is a list of. It is a list of every way the printer can be asked to write a line, which is wider on purpose: a lesson added next month prints through the same printer, and a check covering only today's lessons would have to be widened by whoever adds it.");
  let numbers = app_code_expression_written_shapes_numbers();
  let truths = app_code_expression_written_shapes_truths();
  let shapes = list_concat(numbers, truths);
  return shapes;
}
