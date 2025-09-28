import { assert_arguments } from "./assert_arguments.mjs";
export function sandbox_5_a(a) {
  assert_arguments(arguments, 1);
  let v = a * 2;
  return v;
}
