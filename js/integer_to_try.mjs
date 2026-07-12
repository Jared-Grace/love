import { integer_from_base_try } from "./integer_from_base_try.mjs";
export function integer_to_try(input) {
  let i = integer_from_base_try(input, 10);
  return i;
}
