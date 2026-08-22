import { app_code_label_comes_first_done_first } from "./app_code_label_comes_first_done_first.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { property_get } from "./property_get.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_cross_precedence_intro(params) {
  "the shared intro for a cross-precedence pair lesson (mixing a WEAK operator with a STRONG one that binds tighter): the rule built up a line at a time - the ordinary left-to-right rule recalled, then that some operators go before others, then that STRONG goes before WEAK, then that this holds even where WEAK is written first - and then TWO worked examples - one with the strong part appearing LATER, one appearing FIRST - both doing the strong part first; every result is COMPUTED from the operators' own fns, so nothing is hand-typed and no arrangement can silently disagree";
  "The two examples are built from DIFFERENT numbers, and each one brings its own. They used to share a single strong sub-expression, on the reasoning that holding it still leaves the position as the only difference and so proves the position is what does not matter.";
  "That reasoning cost more than it bought. Sharing the sub-expression made the second example the first one with its two sides swapped - the same three numbers, in the same lesson, one line apart - so a learner had a near-copy to compare rather than a second case to read. Worse, where the two outer numbers also matched, both examples came out at the SAME value, and a value arrived at twice reads as the thing being shown; the lesson would have been teaching that the order does not change the answer, which is a different fact about a different pair of operators.";
  let root = property_get(params, "root");
  let weak = property_get(params, "weak");
  let strong = property_get(params, "strong");
  let later_inner_left = property_get(params, "later_inner_left");
  let later_inner_right = property_get(params, "later_inner_right");
  let later_outer = property_get(params, "later_outer");
  let first_inner_left = property_get(params, "first_inner_left");
  let first_inner_right = property_get(params, "first_inner_right");
  let first_outer = property_get(params, "first_outer");
  let weak_symbol = property_get(weak, "operator");
  let strong_symbol = property_get(strong, "operator");
  let weak_fn = property_get(weak, "fn");
  let strong_fn = property_get(strong, "fn");
  function binary(left, op, right) {
    "the code x op y, e.g. 3 * 4 or 10 - 6";
    let t = text_to(left);
    let t2 = text_to(right);
    let code = text_combine_multiple([t, " ", op, " ", t2]);
    return code;
  }
  let header = app_code_container_light_blue(root);
  ("the rule is built in four steps rather than stated in one: the ordinary rule the learner already has, that it has exceptions at all, which two operators this one is about, and only last the case where the strong one is written second. Stated in one line it is four new things arriving together, and the only one a learner can check against anything they already know is the last.");
  ("The first line is the sentence the same-strength pair lessons end on, word for word, which is why it is a shared unit rather than typed again here. A recall reworded is read as a second rule, and a second rule is the one thing this screen must not add - what follows takes the first line away, so the learner has to recognise it as the very sentence being taken away.");
  ("It does not say normally or usually. The but on the next line is what makes the first line the ordinary case, and doing that job twice would hedge the recall at the moment it is meant to be firm.");
  let same_strength = app_code_label_comes_first_done_first();
  html_div_cycle_code(header, [same_strength]);
  html_div_cycle_code(header, [
    "But some operators are done before other operators",
  ]);
  html_div_cycle_code(header, [
    "We do ",
    strong_symbol,
    " before ",
    weak_symbol,
  ]);
  html_div_cycle_code(header, [
    "Even when ",
    weak_symbol,
    " comes first and ",
    strong_symbol,
    " comes later, we still do ",
    strong_symbol,
    " first",
  ]);
  function example_say(expression, sub, inner, combined, final) {
    "one example said in two lines: the whole expression and the strong sub-expression taken out of it with its value, then what is left of the line and what that comes to";
    let box = app_code_container_light_blue(root);
    let t3 = text_to(inner);
    html_div_cycle_code(box, [
      "For ",
      expression,
      ", we do ",
      sub,
      " first, which is ",
      t3,
    ]);
    let t4 = text_to(final);
    html_div_cycle_code(box, ["Now we have ", combined, ", which is ", t4]);
  }
  ("the strong part LATER: the line opens with the weak operator, and the rule is what sends the learner past it to the end of the line");
  let later_sub = binary(later_inner_left, strong_symbol, later_inner_right);
  let later_inner = strong_fn(later_inner_left, later_inner_right);
  let t5 = text_to(later_outer);
  let later_expression = text_combine_multiple([
    t5,
    " ",
    weak_symbol,
    " ",
    later_sub,
  ]);
  let v = binary(later_outer, weak_symbol, later_inner);
  let v2 = weak_fn(later_outer, later_inner);
  example_say(later_expression, later_sub, later_inner, v, v2);
  ("and the strong part FIRST, where doing it first is also what reading left to right would have done - so the two together say the rule holds whichever end of the line it is at, rather than only where it is surprising");
  let first_sub = binary(first_inner_left, strong_symbol, first_inner_right);
  let first_inner = strong_fn(first_inner_left, first_inner_right);
  let t6 = text_to(first_outer);
  let first_expression = text_combine_multiple([
    first_sub,
    " ",
    weak_symbol,
    " ",
    t6,
  ]);
  let v3 = binary(first_inner, weak_symbol, first_outer);
  let v4 = weak_fn(first_inner, first_outer);
  example_say(first_expression, first_sub, first_inner, v3, v4);
}
