import { integer_to_base_try } from "../../../love/public/src/integer_to_base_try.mjs";
export function integer_to_try(input) {
  const base = 10;
  let i = integer_to_base_try(input, base);
  return i;
}
