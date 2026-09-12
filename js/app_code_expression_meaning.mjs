import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { not } from "./not.mjs";
import { text_to } from "./text_to.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_expression_node_before_is } from "./app_code_expression_node_before_is.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_expression_meaning(item) {
  arguments_assert(arguments, 1);
  ("what a shape MEANS, written out with a pair of brackets round every single operator and nothing at all left to the reader: the shape printed as Math.floor(14 / 4) * 4 comes out (Math.floor((14/4))*4)");
  ("Nobody reads this. It exists to be held against the same sentence read out of the LINE the shape printed as, and two things that are equal as text are the same shape - so the comparison needs no walk of its own and cannot quietly pass a pair of shapes it failed to look inside.");
  ("Brackets everywhere rather than only where they are needed, because deciding where they are needed is exactly the thing being checked. A writing that left them out wherever the strengths make them unnecessary would agree with a line that dropped a pair it needed, which is the one fault this was built to find.");
  ("No spaces anywhere, for the same reason: how a line is spaced is how it is spelled, not what it means, and a check that failed on a space would go red on a day nothing was wrong.");
  let node_is = app_code_expression_node_is(item);
  if (not(node_is)) {
    ("a value is already the whole of what it means");
    let text = text_to(item);
    return text;
  }
  let symbol = property_get(item, "operator");
  let right = property_get(item, "right");
  let right_meaning = app_code_expression_meaning(right);
  let before_is = app_code_expression_node_before_is(item);
  if (before_is) {
    let one_sided = text_combine_multiple([symbol, "(", right_meaning, ")"]);
    return one_sided;
  }
  let left = property_get(item, "left");
  let left_meaning = app_code_expression_meaning(left);
  let both_sides = text_combine_multiple([
    "(",
    left_meaning,
    symbol,
    right_meaning,
    ")",
  ]);
  return both_sides;
}
