import { null_not_is } from "./null_not_is.mjs";
import { integer_to_try } from "./integer_to_try.mjs";
export function integer_to_try_is(item) {
  let i = integer_to_try(item);
  let nn = null_not_is(i);
  return nn;
}
