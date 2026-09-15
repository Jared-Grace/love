import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { js_operator_double_asterisk_symbol } from "./js_operator_double_asterisk_symbol.mjs";
import { not } from "./not.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { integer_is } from "./integer_is.mjs";
import { subtract_1 } from "./subtract_1.mjs";
import { greater_than } from "./greater_than.mjs";
export function app_code_line_operator_steps(node) {
  arguments_assert(arguments, 1);
  ("How many steps of working out one operator asks for: one, except a power whose exponent is a whole number written on the line, which asks for one multiplication fewer than the exponent.");
  ("A power looks like one step and is not. 3 ** 4 means 3 * 3 * 3 * 3, so working it out is three multiplications, and a learner meets it as that. Counting it as one operator put it level with a single +, which let the order of the course say a power could come before a line of three multiplications it stands for.");
  ("An exponent that is a name, or a line of its own, or a fraction, has no number of multiplications to read off, so it counts as the one step it looks like. So does an exponent of one or less: there is still the operator to read, even when there is nothing to multiply.");
  let one = 1;
  let operator = property_get(node, "operator");
  let right2 = js_operator_double_asterisk_symbol();
  let power_is = equal(operator, right2);
  if (not(power_is)) {
    return one;
  }
  let right = property_get(node, "right");
  let written_is = js_node_type_is(right, "Literal");
  if (not(written_is)) {
    return one;
  }
  let exponent_written = property_get(right, "value");
  let whole_is = integer_is(exponent_written);
  if (not(whole_is)) {
    return one;
  }
  let multiplications = subtract_1(exponent_written);
  let more_is = greater_than(multiplications, one);
  if (not(more_is)) {
    return one;
  }
  return multiplications;
}
