import { list_any_starts_with } from "./list_any_starts_with.mjs";
import { digits } from "./digits.mjs";
export function string_starts_with_digit(item2) {
  let d = digits();
  let any = list_any_starts_with(item2, d);
  return any;
}
