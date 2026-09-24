import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { app_receipts_colors } from "./app_receipts_colors.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
export function app_receipts_color_get(purchase) {
  "$plain purchase";
  "The colour a purchase is marked with, as one of the colours purchases can have. A purchase kept before colours could be chosen, or marked with a key this phone does not know, is blue, the colour every purchase starts as.";
  arguments_assert(arguments, 1);
  let key = property_get_or(purchase, "color", "blue");
  let colors = app_receipts_colors();
  for (let c of colors) {
    let left = property_get(c, "key");
    if (equal(left, key)) {
      return c;
    }
  }
  let first = colors[0];
  return first;
}
