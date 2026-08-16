import { html_div } from "./html_div.mjs";
import { app_shared_spaced_below } from "./app_shared_spaced_below.mjs";
import { app_shared_spaced_above } from "./app_shared_spaced_above.mjs";
import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { app_code_expression_lines_after } from "./app_code_expression_lines_after.mjs";
import { app_code_expression_nodes_ready } from "./app_code_expression_nodes_ready.mjs";
import { app_code_expression_value } from "./app_code_expression_value.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { list_between } from "./list_between.mjs";
import { list_concat } from "./list_concat.mjs";
import { text_to } from "./text_to.mjs";
export function app_code_lesson_expression_either_first_proof(parent, tree) {
  arguments_assert(arguments, 2);
  ("the whole of what this lesson teaches, shown of the very line the learner is about to press: that two operators are ready at once, that either of them may be taken first, and that both orders land on the same value");
  ("Worked, not asserted. A sentence saying the order does not matter is something to believe; the two orders written out one under the other, ending on one value, is something to check - and checking it is how a learner comes to trust a choice they made themselves rather than waiting to be told which one was meant.");
  ("Every ready operator gets a row, read from the shape rather than from a count, so the rows say what is true of the line standing there instead of what was true of the line this was written for.");
  ("Each row names its operator by the little line it is - Take 2 * 3 first - rather than by which side it is on. The learner has to find that operator on the line below to press it, and a name they can read off the line is one they can find; left and right is a second reading to do first.");
  ("a plain block rather than a card of its own, because it already stands inside the example's card and a card drawn inside a card reads as a second thing beside the line rather than as what is being said about it");
  let ready = app_code_expression_nodes_ready(tree);
  let card = html_div(parent);
  let heading = html_div_cycle_code(card, [
    "Two operators are ready here, so either one can go first",
  ]);
  app_shared_spaced_below(heading);
  function each_ready(node) {
    let head = app_code_expression_code(node);
    let lines = app_code_expression_lines_after(tree, node);
    let opening = ["Take ", head, " first, and the line is "];
    let between = list_between(lines, ", then ");
    let parts = list_concat(opening, between);
    html_div_cycle_code(card, parts);
  }
  each(ready, each_ready);
  let value = app_code_expression_value(tree);
  let value_code = text_to(value);
  let landed = html_div_cycle_code(card, [
    "Either way, the line comes to ",
    value_code,
  ]);
  app_shared_spaced_above(landed);
}
