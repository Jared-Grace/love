import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_percent_symbol } from "./js_operator_percent_symbol.mjs";
import { js_operator_double_asterisk_symbol } from "./js_operator_double_asterisk_symbol.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_code_math_floor_name } from "./js_code_math_floor_name.mjs";
import { app_code_expression_node_before } from "./app_code_expression_node_before.mjs";
import { app_code_expression_node } from "./app_code_expression_node.mjs";
import { list_add } from "./list_add.mjs";
export function app_code_expression_written_shapes_unpressed() {
  arguments_assert(arguments, 0);
  ("shapes built with the two operators no lesson ever puts under a press - the remainder sign and the power sign - to hold every printed line against: each one alone, each one against a times and against a plus on both sides, each one against the other, each one beside a rounding down, and a power holding a power both ways round");
  ("Written out rather than crossed with every other operator, and for one reason: the numbers. A remainder can come to nought and a power can run away, and a line that came to nought over nought or to a number javascript writes with an exponent in it would be a fault in the check rather than a fault in the printer. Every line here lands on a whole number no larger than 512.");
  ("Each of these has a lesson of its own, and neither lesson presses anything apart: the remainder lesson prints one line at a time and the power lesson matches a short form against its written-out form, both as flat text over a single operator. So the printer had never once been asked to write either sign, and a sign the printer is never asked about is a sign whose strength nobody notices is missing. Both sat outside every strength class and so took a comparison's strength by falling through. The two lines that proved it are here: the shape 14 % (4 * 2) printed as 14 % 4 * 2, and the shape (2 ** 3) ** 2 printed as 2 ** 3 ** 2. Both mean something other than what they were built from.");
  ("The power sign is also the only operator the app knows whose RIGHT side is worked out first, so its two nestings are here separately: one of them must keep its parentheses and the other must not, and a printer that treated the sign like every other one would get exactly one of the two wrong.");
  let remainder = js_operator_percent_symbol();
  let power = js_operator_double_asterisk_symbol();
  let times = js_operator_asterisk_symbol();
  let plus = js_operator_plus_symbol();
  let floor_name = js_code_math_floor_name();
  let rounded = app_code_expression_node_before(floor_name, 3.5);
  let shapes = [];
  let alone = app_code_expression_node(14, remainder, 4);
  list_add(shapes, alone);
  let times_inside = app_code_expression_node(4, times, 2);
  let over_times = app_code_expression_node(14, remainder, times_inside);
  list_add(shapes, over_times);
  let under_times = app_code_expression_node(alone, times, 2);
  list_add(shapes, under_times);
  let under_plus = app_code_expression_node(2, plus, alone);
  list_add(shapes, under_plus);
  let plus_inside = app_code_expression_node(2, plus, 14);
  let over_plus = app_code_expression_node(plus_inside, remainder, 4);
  list_add(shapes, over_plus);
  let rounded_left = app_code_expression_node(rounded, remainder, 2);
  list_add(shapes, rounded_left);
  let rounded_right = app_code_expression_node(14, remainder, rounded);
  list_add(shapes, rounded_right);
  let power_alone = app_code_expression_node(2, power, 3);
  list_add(shapes, power_alone);
  let power_left = app_code_expression_node(power_alone, power, 2);
  list_add(shapes, power_left);
  let power_inside = app_code_expression_node(3, power, 2);
  let power_right = app_code_expression_node(2, power, power_inside);
  list_add(shapes, power_right);
  let power_under_times = app_code_expression_node(power_alone, times, 2);
  list_add(shapes, power_under_times);
  let power_under_times_right = app_code_expression_node(
    2,
    times,
    power_inside,
  );
  list_add(shapes, power_under_times_right);
  let times_under_power = app_code_expression_node(2, power, times_inside);
  list_add(shapes, times_under_power);
  let times_over_power = app_code_expression_node(times_inside, power, 2);
  list_add(shapes, times_over_power);
  let rounded_over_power = app_code_expression_node(rounded, power, 2);
  list_add(shapes, rounded_over_power);
  let rounded_under_power = app_code_expression_node(2, power, rounded);
  list_add(shapes, rounded_under_power);
  let power_under_remainder = app_code_expression_node(
    14,
    remainder,
    power_alone,
  );
  list_add(shapes, power_under_remainder);
  let power_over_remainder = app_code_expression_node(
    power_alone,
    remainder,
    3,
  );
  list_add(shapes, power_over_remainder);
  return shapes;
}
