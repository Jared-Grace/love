import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
export function html_on_enter_lambda(lambda) {
  let f = function html_on_enter_lambda_inner(e) {
    let k = property_get(e, "key");
    if (equal(k, "Enter")) {
      lambda();
    }
  };
  return f;
}
