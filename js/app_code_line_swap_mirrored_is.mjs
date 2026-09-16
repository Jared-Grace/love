import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse_try } from "./js_parse_try.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { text_slice } from "./text_slice.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_first } from "./list_first.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_includes } from "./list_includes.mjs";
import { and } from "./and.mjs";
export function app_code_line_swap_mirrored_is(code) {
  arguments_assert(arguments, 1);
  ("Whether one line is a comparison of the same two things turned round: 5 ** 3 === 3 ** 5, 7 + 5 === 5 + 7, (2 < 5) === (5 < 2).");
  ("A line like that asks a learner nothing about what either side comes to. Both sides hold the same two things under the same sign, so the only question left is whether that sign gives the same answer either way round - which is the one thing the lesson teaches. A learner ticks true for plus and times, false for take away and divide and power, and never works out 3 ** 5.");
  ("Pricing one of these by the signs standing on it charged the two power lessons seven steps each, in a run of lessons costing three, and made them the two furthest out-of-place lessons in the whole course. They are not that. They are among the easiest lessons in the run, because a remembered rule answers them and no arithmetic does.");
  ("Read off the line rather than declared by the lesson, the same way a matching exercise is, so a lesson need say nothing about itself and a new one cannot forget to. A swapping lesson hands out nothing but these, and the lessons before it that hand out one among others are unchanged by this, because the other lines they hand out are priced the same as ever.");
  ("The sign on both sides has to be the same sign. The same two numbers under two different signs - 2 + 8 === 8 * 2 - is not a turning round at all, and a learner does have to work both sides of it out.");
  ("Both sides are read as they were written rather than as they were parsed, so two sides count as the same thing only when the same letters were typed for them. That is the strict way round: a line wrongly called turned round would go unpriced, while one wrongly left alone is priced as it always was.");
  let ast = js_parse_try(code);
  let unread = null_is(ast);
  if (unread) {
    return false;
  }
  function written(node) {
    "the letters of the line that this piece of it was read from";
    let from = property_get(node, "start");
    let to = property_get(node, "end");
    let text = text_slice(code, from, to);
    return text;
  }
  let body = property_get(ast, "body");
  let size = list_size(body);
  let one = 1;
  let single = equal(size, one);
  if (not(single)) {
    return false;
  }
  let statement = list_first(body);
  let said_is = js_node_type_is(statement, "ExpressionStatement");
  if (not(said_is)) {
    return false;
  }
  let node = property_get(statement, "expression");
  let compared_is = js_node_type_is(node, "BinaryExpression");
  if (not(compared_is)) {
    return false;
  }
  ("the signs that ask whether two sides agree, which are the only ones a swapping lesson ever puts in the middle");
  let comparisons = ["===", "!==", "==", "!="];
  let operator = property_get(node, "operator");
  let comparing = list_includes(comparisons, operator);
  if (not(comparing)) {
    return false;
  }
  let left = property_get(node, "left");
  let right = property_get(node, "right");
  let left_sided_is = js_node_type_is(left, "BinaryExpression");
  let right_sided_is = js_node_type_is(right, "BinaryExpression");
  let both_sided = and(left_sided_is, right_sided_is);
  if (not(both_sided)) {
    return false;
  }
  let left_operator = property_get(left, "operator");
  let right_operator = property_get(right, "operator");
  let same_sign = equal(left_operator, right_operator);
  if (not(same_sign)) {
    return false;
  }
  let value = property_get(left, "left");
  let left_first = written(value);
  let value2 = property_get(left, "right");
  let left_second = written(value2);
  let value3 = property_get(right, "left");
  let right_first = written(value3);
  let value4 = property_get(right, "right");
  let right_second = written(value4);
  let outer_same = equal(left_first, right_second);
  let inner_same = equal(left_second, right_first);
  let turned = and(outer_same, inner_same);
  return turned;
}
