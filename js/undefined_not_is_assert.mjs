import { undefined_not_is_assert_lambda } from "../../../love/public/src/undefined_not_is_assert_lambda.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function undefined_not_is_assert(value) {
  marker("1");
  function lambda2() {
    let v2 = {};
    return v2;
  }
  undefined_not_is_assert_lambda(value, lambda2);
}
