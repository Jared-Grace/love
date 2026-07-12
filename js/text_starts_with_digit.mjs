import { list_any_starts_with } from "./list_any_starts_with.mjs";
import { digits } from "./digits.mjs";
export function text_starts_with_digit(item) {
  let d = digits();
  let any = list_any_starts_with(item, d);
  return any;
}
