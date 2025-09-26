import { undefined_not_is_assert_lambda } from "./undefined_not_is_assert_lambda.mjs";
import { marker } from "./marker.mjs";
export function undefined_not_is_assert(value, lambda) {
  marker("1");
  let v = undefined_not_is_assert_lambda(value, lambda);
  return v;
}
