import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { js_operator_bang_double_equal_symbol } from "./js_operator_bang_double_equal_symbol.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { property_equals } from "./property_equals.mjs";
import { ternary } from "./ternary.mjs";
export function app_code_comparison_equality_symbol(
  comparison,
  plain_value,
  want_true,
) {
  arguments_assert(arguments, 3);
  ("=== or !==, picked so that comparing this comparison against this plain true or false lands on want_true");
  ("The comparison already carries the true or false it works out to, so whether the two sides agree is known without running anything. They agree and we want true, or they differ and we want false: === . Otherwise !== .");
  ("Two lessons pick this symbol the same way and a third will, because it is what lets a quiz screen show two true lines and two false ones without ever computing an answer. Which side the comparison stands on does not enter into it - === and !== read the same either way - so the choice is made once, before anything is arranged.");
  let agree = property_equals(comparison, "value", plain_value);
  let wanted = equal(agree, want_true);
  let on_true = js_operator_triple_equal_symbol();
  let on_false = js_operator_bang_double_equal_symbol();
  let symbol = ternary(wanted, on_true, on_false);
  return symbol;
}
