import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
export function app_g_verify_home_lambda(a, b) {
  arguments_assert(arguments, 2);
  let na = Number(property_get(a, "verse_numbers")[0]);
  let nb = Number(property_get(b, "verse_numbers")[0]);
  let difference = subtract(na, nb);
  return difference;
}
