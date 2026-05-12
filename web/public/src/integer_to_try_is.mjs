import { null_not_is } from "../../../love/public/src/null_not_is.mjs";
import { integer_to_try } from "../../../love/public/src/integer_to_try.mjs";
export function integer_to_try_is(item2) {
  let i = integer_to_try(item2);
  let nn = null_not_is(i);
  return nn;
}
