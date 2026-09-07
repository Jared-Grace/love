import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { app_code_operator_code } from "./app_code_operator_code.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_operator_shape_parenthesis_first(
  inner_symbol,
  outer_symbol,
) {
  arguments_assert(arguments, 2);
  ("the shape a lesson title paints when one operator stands inside a pair of parentheses and the other stands after them, with nothing standing where the values would go: ( || ) && , or ( && ) ||");
  ("A title cannot paint a whole line, so it paints what is left of one when the trues and falses are taken out. What survives is the marks and the order they sit in, which is the whole of what separates one of these lessons from the next.");
  ("It is the operator inside the parentheses that is solved first, so a reader who has met the lessons reads the shape in the order the app works it out - left to right, nearest mark first.");
  ("The spaces are the ones the app already puts round an operator, so the shape is spaced the way a real line is and a reader is not learning to recognise a spelling the app never prints.");
  let left = js_code_parenthesis_left();
  let right = js_code_parenthesis_right();
  let inside = app_code_operator_code(left, inner_symbol, right);
  let shape = text_combine_multiple([inside, " ", outer_symbol]);
  return shape;
}
