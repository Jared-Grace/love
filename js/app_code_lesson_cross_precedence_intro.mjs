import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { property_get } from "./property_get.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_cross_precedence_intro(params) {
  "the shared intro for a cross-precedence pair lesson (mixing a WEAK operator with a STRONG one that binds tighter): the rule 'we always do STRONG before WEAK, even if STRONG appears later', then the SAME strong sub-expression worked twice - once with the strong part appearing LATER, once appearing FIRST - both doing the strong part first; every result is COMPUTED from the operators' own fns, so nothing is hand-typed and no arrangement can silently disagree";
  let root = property_get(params, "root");
  let weak = property_get(params, "weak");
  let strong = property_get(params, "strong");
  let inner_left = property_get(params, "inner_left");
  let inner_right = property_get(params, "inner_right");
  let later_outer = property_get(params, "later_outer");
  let first_outer = property_get(params, "first_outer");
  let weak_symbol = property_get(weak, "operator");
  let strong_symbol = property_get(strong, "operator");
  let weak_fn = property_get(weak, "fn");
  let strong_fn = property_get(strong, "fn");
  let inner = strong_fn(inner_left, inner_right);
  function binary(left, op, right) {
    "the code x op y, e.g. 3 * 4 or 10 - 6";
    let code = text_combine_multiple([text_to(left), " ", op, " ", text_to(right)]);
    return code;
  }
  let sub = binary(inner_left, strong_symbol, inner_right);
  let header = app_code_container_light_blue(root);
  html_div_cycle_code(header, [
    "We always do ",
    strong_symbol,
    " before ",
    weak_symbol,
    ", even if ",
    strong_symbol,
    " appears later",
  ]);
  function worked_example(expression, combined, final) {
    "one example: the whole expression, doing the strong sub-expression first (which is the shared inner), then combining with the weak operator to the final value";
    let box = app_code_container_light_blue(root);
    html_div_cycle_code(box, [
      "For ",
      expression,
      ", we do ",
      sub,
      " first, which is ",
      text_to(inner),
    ]);
    html_div_cycle_code(box, [
      "Now we have ",
      combined,
      ", which is ",
      text_to(final),
    ]);
  }
  let later_expression = text_combine_multiple([
    text_to(later_outer),
    " ",
    weak_symbol,
    " ",
    sub,
  ]);
  worked_example(
    later_expression,
    binary(later_outer, weak_symbol, inner),
    weak_fn(later_outer, inner),
  );
  let first_expression = text_combine_multiple([
    sub,
    " ",
    weak_symbol,
    " ",
    text_to(first_outer),
  ]);
  worked_example(
    first_expression,
    binary(inner, weak_symbol, first_outer),
    weak_fn(inner, first_outer),
  );
}
