import { not } from "../../../love/public/src/not.mjs";
import { text_starts_with } from "../../../love/public/src/text_starts_with.mjs";
export function text_starts_with_not(item, book_code) {
  let a = text_starts_with(item, book_code);
  let sw = not(a);
  return sw;
}
