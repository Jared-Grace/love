import { not } from "./not.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
export function string_starts_with_not(item, book_code) {
  let a = string_starts_with(item, book_code);
  let sw = not(a);
  return sw;
}
