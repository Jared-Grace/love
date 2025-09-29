import { not } from "../../../love/public/src/not.mjs";
import { string_starts_with } from "../../../love/public/src/string_starts_with.mjs";
export function string_starts_with_not(item, book_code) {
  let a = string_starts_with(item, book_code);
  let sw = not(a);
  return sw;
}
