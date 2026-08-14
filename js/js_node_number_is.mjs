import { equal } from "./equal.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { js_operators_number } from "./js_operators_number.mjs";
import { list_includes } from "./list_includes.mjs";
import { number_is } from "./number_is.mjs";
import { property_get } from "./property_get.mjs";
export function js_node_number_is(node) {
  "Whether a piece of a line comes out as a number by arithmetic alone. 3 does, 44 / 4 does, 2 ** 3 - 1 does; anything holding a word, a piece of writing or a true does not.";
  "Asked because a plus means two different things. Between numbers it may be moved about freely, and 1 + 2 and 2 + 1 are the same sum written twice. Between two pieces of writing it may not: He and gave joined the other way round is a different sentence, and an unscramble that swapped them would mark a learner right for saying something else. Whoever wants to rearrange a line has to know which of the two they are holding, and this is that question.";
  "It answers no to a name, because a name only says what it holds once the line is running, and a question answered differently from one moment to the next is not one a rearrangement may be trusted to.";
  let type = js_node_type(node);
  let literal = equal(type, "Literal");
  if (literal) {
    let value = property_get(node, "value");
    let plain = number_is(value);
    return plain;
  }
  let operators = js_operators_number();
  let binary = equal(type, "BinaryExpression");
  if (binary) {
    let operator = property_get(node, "operator");
    let arithmetic = list_includes(operators, operator);
    if (arithmetic) {
      let left = property_get(node, "left");
      let right = property_get(node, "right");
      let left_number = js_node_number_is(left);
      let right_number = js_node_number_is(right);
      let both = left_number && right_number;
      return both;
    }
  }
  let unary = equal(type, "UnaryExpression");
  if (unary) {
    let sign = property_get(node, "operator");
    let signed = list_includes(operators, sign);
    if (signed) {
      let argument = property_get(node, "argument");
      let inside = js_node_number_is(argument);
      return inside;
    }
  }
  let no = false;
  return no;
}
