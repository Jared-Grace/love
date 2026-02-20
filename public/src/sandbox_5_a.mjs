import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
export function sandbox_5_a(a) {
  arguments_assert(arguments, 1);
  let v = a * 2;
  return v;
}
