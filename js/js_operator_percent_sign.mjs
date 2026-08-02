import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_percent } from "./js_operator_percent.mjs";
import { property_get } from "./property_get.mjs";
export function js_operator_percent_sign() {
  arguments_assert(arguments, 0);
  ("The sign a learner sees for remainder, written the way it appears in code.");
  ("The remainder lessons all show the sign in their own worked examples, and they");
  ("read it off the one place that says what remainder is rather than spelling it");
  ("out again. That one place also carries the doing of it, which the lessons");
  ("showing the sign have no use for.");
  let operator = js_operator_percent();
  let sign = property_get(operator, "operator");
  return sign;
}
