import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_uneven_dividend } from "./app_code_uneven_dividend.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_uneven_dividend_only(quotient, divisor) {
  arguments_assert(arguments, 2);
  ("The dividend on its own, from a division that does not come out even.");
  ("The sibling hands back the leftover and the whole part beside it, because some");
  ("lessons ask about those. Most only ever show the division, so the three parts");
  ("are given a name that nothing else ever reads.");
  let parts = app_code_uneven_dividend(quotient, divisor);
  let dividend = property_get(parts, "dividend");
  return dividend;
}
