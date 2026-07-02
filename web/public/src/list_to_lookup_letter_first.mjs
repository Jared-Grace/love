import { text_letters_only } from "../../../love/public/src/text_letters_only.mjs";
import { lookup_adder } from "../../../love/public/src/lookup_adder.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { text_first } from "../../../love/public/src/text_first.mjs";
export function list_to_lookup_letter_first(unique) {
  function lambda2(la) {
    function lambda3(book_name) {
      let letters = text_letters_only(t);
      let key = text_first(book_name);
      la(key, book_name);
    }
    each(unique, lambda3);
  }
  let result = lookup_adder(lambda2);
  return result;
}
