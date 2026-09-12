import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_operators_strong } from "./app_code_operators_strong.mjs";
import { app_code_operators_weak } from "./app_code_operators_weak.mjs";
import { list_concat } from "./list_concat.mjs";
import { js_code_math_floor_name } from "./js_code_math_floor_name.mjs";
import { app_code_expression_integer_division_tree } from "./app_code_expression_integer_division_tree.mjs";
import { app_code_expression_node } from "./app_code_expression_node.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { app_code_expression_node_before } from "./app_code_expression_node_before.mjs";
import { app_code_expression_remainder_tree } from "./app_code_expression_remainder_tree.mjs";
export function app_code_expression_written_shapes_numbers() {
  arguments_assert(arguments, 0);
  ("shapes of arithmetic to hold every printed line against: one operator, then two with the deeper one first on the left and then on the right, then rounding down over a division and over a plain number, then a rounding down standing on either side of another operator, and the remainder formula whole");
  ("Built out of the operator classes rather than written out as a list of lines, so an operator added to a class is covered here the same day. A list of lines would have covered whatever somebody thought of on the day they typed it, and the two brackets that went missing on real screens were both things nobody thought of.");
  ("Both sides deep, separately, because that is where the one rule about strength that is easy to get wrong lives: the right side has to be gathered one strength sooner than the left, since an operator of equal strength on the right goes second. 8 / 4 / 2 is not 8 / (4 / 2), and nothing on the left ever needs that.");
  ("Fourteen, four and two, so that every line lands on a number that can be written out exactly. A line that came to a number javascript prints with a long tail would be compared against that tail on both sides and so still pass, but a reader looking at a failure needs to see the arithmetic rather than the tail.");
  ("The remainder formula is asked for from the place the lessons build it, not built again here. It is the deepest line a learner meets - four operators, one of them called - and it is the line that both reported faults were found on.");
  let strong = app_code_operators_strong();
  let weak = app_code_operators_weak();
  let arithmetic = list_concat(strong, weak);
  let floor_name = js_code_math_floor_name();
  let left_number = 14;
  let right_number = 4;
  let third_number = 2;
  let decimal = 3.5;
  let rounded = app_code_expression_integer_division_tree(
    left_number,
    right_number,
  );
  let shapes = [];
  function single(symbol) {
    "one operator with a number on each side";
    let shape = app_code_expression_node(left_number, symbol, right_number);
    list_add(shapes, shape);
  }
  each(arithmetic, single);
  function pair(symbol) {
    "two operators, the deeper one on the left and then the same pair the other way round";
    function inner(symbol_inner) {
      let left = app_code_expression_node(
        left_number,
        symbol_inner,
        right_number,
      );
      let deep_left = app_code_expression_node(left, symbol, third_number);
      list_add(shapes, deep_left);
      let right = app_code_expression_node(
        right_number,
        symbol_inner,
        third_number,
      );
      let deep_right = app_code_expression_node(left_number, symbol, right);
      list_add(shapes, deep_right);
    }
    each(arithmetic, inner);
  }
  each(arithmetic, pair);
  list_add(shapes, rounded);
  let item = app_code_expression_node_before(floor_name, decimal);
  list_add(shapes, item);
  function beside(symbol) {
    "a rounding down standing on the left of another operator, and then on its right";
    let on_left = app_code_expression_node(rounded, symbol, right_number);
    list_add(shapes, on_left);
    let on_right = app_code_expression_node(right_number, symbol, rounded);
    list_add(shapes, on_right);
  }
  each(arithmetic, beside);
  let remainder = app_code_expression_remainder_tree(left_number, right_number);
  list_add(shapes, remainder);
  return shapes;
}
