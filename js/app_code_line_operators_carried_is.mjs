import { property_greater_than } from "./property_greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_line_shape } from "./app_code_line_shape.mjs";
import { null_is } from "./null_is.mjs";
export function app_code_line_operators_carried_is(code) {
  arguments_assert(arguments, 1);
  ("Whether one line of code has any operator standing on it at all.");
  ("A line carrying no operator is a value already: a learner reads it rather than works it out. A line carrying one or more is something that has a result other than what is written, which is what makes it a thing to be solved.");
  ("Text that does not read as code answers no, because nothing can be said about the operators on a line that was never a line. The same is true of a line with no value written on it - the reading beside this one hands back nothing there, and nothing is not a count of zero.");
  let shape = app_code_line_shape(code);
  let unread = null_is(shape);
  if (unread) {
    return false;
  }
  let carried_is = property_greater_than(shape, "operators", 0);
  return carried_is;
}
