import { not_equal } from "./not_equal.mjs";
export function null_not_is(value) {
  let nn = not_equal(value, null);
  return nn;
}
