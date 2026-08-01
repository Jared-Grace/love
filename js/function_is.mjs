import { equal } from "./equal.mjs";
export function function_is(f) {
  let fi = equal(typeof f, "function");
  return fi;
}
