import { integer_to_base_try } from "../../../love/public/src/integer_to_base_try.mjs";
export function integer_base_2_from_try(input) {
  let i = integer_to_base_try(input, 2);
  return i;
}
