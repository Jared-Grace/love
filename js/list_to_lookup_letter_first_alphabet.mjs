import { list_to_dictionary_value } from "./list_to_dictionary_value.mjs";
import { each } from "./each.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists } from "./property_exists.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { list_alphabet_upper } from "./list_alphabet_upper.mjs";
import { list_to_lookup_letter_first } from "./list_to_lookup_letter_first.mjs";
export function list_to_lookup_letter_first_alphabet(list) {
  let result = list_to_lookup_letter_first(list);
  let alphabet_upper = list_alphabet_upper();
  function lambda(upper) {
    let value = [];
    let lower = text_lower_to(upper);
    function lambda2(letter) {
      let exists = property_exists(result, letter);
      if (exists) {
        let value2 = property_get(result, letter);
        list_add_multiple(value, value2);
      }
    }
    each([lower, upper], lambda2);
    return value;
  }
  let dictionary = list_to_dictionary_value(alphabet_upper, lambda);
  return dictionary;
}
