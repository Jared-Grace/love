import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
import { app_code_expression_node_before } from "./app_code_expression_node_before.mjs";
export function app_code_lesson_expression_choose_order_not_twice_expression(
  want_true,
) {
  "$plain want_true";
  "a true or a false with two ! symbols in front of it, built as a shape so the quiz can work one of them out at a time: !!true, or !!false";
  "TWO OPERATORS AND NEITHER OF THEM HAS A SIDE ON ITS LEFT. Every press-at-a-time line before this one has had at least one operator standing between two things, so which part is ready was read off what sat either side of it. Here the rule is read off nothing but nearness, which is the smallest place it can be read and so the plainest one to read it in.";
  "The one the learner may press is the inner one, and the outer one cannot go first for exactly the reason every line in this run gives: what stands after it is not a value yet - it is the other ! , still waiting. Nothing has to refuse the wrong press, because the line itself says which is which.";
  "What the line comes to is what stands under both symbols, because two ! symbols give back what they were handed. So the line is asked for as a true one or a false one like every other, and the word written under them is that same word rather than its opposite.";
  arguments_assert(arguments, 1);
  let symbol = js_operator_bang_symbol();
  let inner = app_code_expression_node_before(symbol, want_true);
  let tree = app_code_expression_node_before(symbol, inner);
  return tree;
}
