import { data_transform } from "./data_transform.mjs";
import { assert_arguments } from "./assert_arguments.mjs";
export function sandbox_5_a(a, data_transform) {
  assert_arguments(arguments, 2);
  let v = a * 2;
  return v;
}
