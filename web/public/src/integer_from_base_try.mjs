import { number_nan_is } from "../../../love/public/src/number_nan_is.mjs";
export function integer_from_base_try(input, base) {
  let i = parseInt(input, base);
  if (number_nan_is(i)) {
    i = null;
  }
  return i;
}
