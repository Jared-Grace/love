import { list_any_starts_with } from "../../../love/public/src/list_any_starts_with.mjs";
import { digits } from "../../../love/public/src/digits.mjs";
export function text_starts_with_digit(item2) {
  let d = digits();
  let any = list_any_starts_with(item2, d);
  return any;
}
