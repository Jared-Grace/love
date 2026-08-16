import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { integer_random } from "./integer_random.mjs";
import { add } from "./add.mjs";
import { integer_random_below } from "./integer_random_below.mjs";
import { ternary } from "./ternary.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_first } from "./list_first.mjs";
export function app_code_lesson_expression_arithmetic_less_than_one(combo) {
  arguments_assert(arguments, 1);
  ("one comparison code string whose true/false answer is fixed by construction: the arithmetic piece makes a value, and the OTHER number is chosen from below/above/equal to that value so the combo's comparison operator yields the wanted answer - decided by RUNNING the operator's own fn, so the boolean can never be mis-derived per operator (=== needs the equal case, < never uses it). The arithmetic sits on the LEFT of the comparison (arithmetic_left) or on the RIGHT, so the learner meets arithmetic on both sides.");
  let op = property_get(combo, "op");
  let arithmetic_left = property_get(combo, "arithmetic_left");
  let want_true = property_get(combo, "want_true");
  let comparison = property_get(combo, "comparison");
  let comparison_symbol = property_get(comparison, "operator");
  let comparison_fn = property_get(comparison, "fn");
  let piece = op();
  let piece_left = property_get(piece, "left");
  let piece_symbol = property_get(piece, "symbol");
  let piece_right = property_get(piece, "right");
  let value = property_get(piece, "value");
  let t = text_to(piece_left);
  let t2 = text_to(piece_right);
  let arithmetic_code = text_combine_multiple([t, " ", piece_symbol, " ", t2]);
  let right2 = integer_random(1, 3);
  let above_value = add(value, right2);
  let below_value = integer_random_below(value);
  let candidates = [below_value, above_value, value];
  function yields(other_number) {
    "true when placing this other number against the arithmetic value makes the comparison give the answer we want; equal is last in the list so strict < and > pick a strict number and only === / !== reach the equal case";
    let side_left = ternary(arithmetic_left, value, other_number);
    let side_right = ternary(arithmetic_left, other_number, value);
    let result = comparison_fn(side_left, side_right);
    let same = equal(result, want_true);
    return same;
  }
  let good = list_filter(candidates, yields);
  let other = list_first(good);
  let other_text = text_to(other);
  let left = ternary(arithmetic_left, arithmetic_code, other_text);
  let right = ternary(arithmetic_left, other_text, arithmetic_code);
  let code = text_combine_multiple([left, " ", comparison_symbol, " ", right]);
  return code;
}
