import { text_letters_only } from "./text_letters_only.mjs";
import { lookup_adder } from "./lookup_adder.mjs";
import { each } from "./each.mjs";
import { text_first } from "./text_first.mjs";
import { text_upper_to } from "./text_upper_to.mjs";
export function list_to_lookup_letter_first(unique) {
  function lambda2(la) {
    function lambda3(item) {
      let letters = text_letters_only(item);
      let key = text_first(letters);
      let u = text_upper_to(key);
      la(u, item);
    }
    each(unique, lambda3);
  }
  let result = lookup_adder(lambda2);
  return result;
}
