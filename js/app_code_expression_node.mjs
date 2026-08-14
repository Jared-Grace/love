import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_expression_node(left, symbol, right) {
  arguments_assert(arguments, 3);
  ("one operator with a side on each of it, where either side may itself be another one of these: the shape 2 * 3 has, and the shape 1 + 2 * 3 has around it");
  ("The lessons up to here have built their lines as text, which is all a line a learner only READS ever needed. A line the learner takes apart a step at a time needs to be a shape rather than a spelling, because each step replaces a part of it, and a part of a piece of text is only findable by looking for it again.");
  ("Built rather than parsed. The lesson makes the line, so it knows the shape already; reading the shape back out of the text it printed would be a second, harder way of knowing something already in hand, and it could disagree.");
  let node = {
    left,
    operator: symbol,
    right,
  };
  return node;
}
