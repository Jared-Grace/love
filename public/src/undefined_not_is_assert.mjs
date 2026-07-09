import { undefined_not_is_assert_lambda } from "../../../love/public/src/undefined_not_is_assert_lambda.mjs";
export function undefined_not_is_assert(value) {
  function lambda() {
    let v = {};
    return v;
  }
  undefined_not_is_assert_lambda(value, lambda);
}
