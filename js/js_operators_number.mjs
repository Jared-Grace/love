import { js_operator_double_asterisk } from "./js_operator_double_asterisk.mjs";
import { js_operator_percent } from "./js_operator_percent.mjs";
import { js_operators_arithmetic } from "./js_operators_arithmetic.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_map_property } from "./list_map_property.mjs";
export function js_operators_number() {
  "The signs that take numbers on both sides and hand a number back - the four everyday ones, with raising to a power and the remainder alongside them.";
  "Worth having apart from the arithmetic four because a caller asking this is asking a different question. The four are the ones a whole run can be rewritten along; these two are only ever one piece standing inside such a run. 2 ** 3 + 1 is one number added to another and may be written the other way about, while the 2 and the 3 inside it may not be.";
  let arithmetic = js_operators_arithmetic();
  let more = [js_operator_double_asterisk(), js_operator_percent()];
  let all = list_concat(arithmetic, more);
  let operators = list_map_property(all, "operator");
  return operators;
}
