import { js_operator_double_equal } from "./js_operator_double_equal.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { js_operator_bang_double_equal_symbol } from "./js_operator_bang_double_equal_symbol.mjs";
import { js_operator_bang_equal } from "./js_operator_bang_equal.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
export function js_operator_equality_positive(operator) {
  "The sign that asks whether two things ARE the same, given a sign that asks about sameness either way round: the not comes off !== and off !=, and a sign already asking sameness is handed back as it stands.";
  "A sign asking whether two things differ is the same question asked and then denied, and that is the whole of what this says. It is what lets a line and the same line signed the other way be read as one line: (3 !== 2) !== (8 === 6) and (8 !== 6) === (2 !== 3) each deny the question twice, so both are asking it plainly.";
  "Anything that is not one of the four is handed back untouched, because there is no not on it to take off.";
  let not_equal_strict = js_operator_bang_double_equal_symbol();
  let equal_strict = js_operator_triple_equal_symbol();
  let object = js_operator_bang_equal();
  let differ_loose_symbol = property_get(object, "operator");
  let object2 = js_operator_double_equal();
  let same_loose_symbol = property_get(object2, "operator");
  let strict = equal(operator, not_equal_strict);
  if (strict) {
    return equal_strict;
  }
  let loose = equal(operator, differ_loose_symbol);
  if (loose) {
    return same_loose_symbol;
  }
  return operator;
}
