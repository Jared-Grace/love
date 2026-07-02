import { each } from "../../../love/public/src/each.mjs";
import { text_prefix_without_try } from "../../../love/public/src/text_prefix_without_try.mjs";
export function text_prefix_without_try_multiple(book_name, prefixes) {
  function lambda4(prefix) {
    book_name = text_prefix_without_try(book_name, prefix);
  }
  each(prefixes, lambda4);
  return book_name;
}
