import { list_to_lookup_letter_first } from "../../../love/public/src/list_to_lookup_letter_first.mjs";
import { ebible_version_books_names } from "../../../love/public/src/ebible_version_books_names.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { property_exists } from "../../../love/public/src/property_exists.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { text_lower_to } from "../../../love/public/src/text_lower_to.mjs";
import { list_alphabet_upper } from "../../../love/public/src/list_alphabet_upper.mjs";
import { list_map_prefix_without_try_multiple } from "../../../love/public/src/list_map_prefix_without_try_multiple.mjs";
import { list_to_dictionary_value } from "../../../love/public/src/list_to_dictionary_value.mjs";
export async function sandbox_3() {
  let mapped = await ebible_version_books_names("engbsb");
  let result = list_to_lookup_letter_first(mapped);
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
