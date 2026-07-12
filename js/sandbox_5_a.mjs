import { arguments_assert } from "./arguments_assert.mjs";
import { multiply } from "./multiply.mjs";
export function sandbox_5_a(a) {
  arguments_assert(arguments, 1);
  let v = multiply(a, 2);
  return v;
}
