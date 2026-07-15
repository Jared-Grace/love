import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { property_in_is } from "./property_in_is.mjs";
import { property_get } from "./property_get.mjs";
export function html_on_enter_lambda(lambda) {
  let f = function html_on_enter_lambda_inner(e) {
    if (not(property_in_is(e, "key"))) {
      return;
    }
    let k = property_get(e, "key");
    if (equal(k, "Enter")) {
      lambda();
    }
  };
  return f;
}
