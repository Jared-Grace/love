import { property_exists } from "../../../love/public/src/property_exists.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { text_lower_to } from "../../../love/public/src/text_lower_to.mjs";
import { list_alphabet_upper } from "../../../love/public/src/list_alphabet_upper.mjs";
import { list_to_lookup_text_first_unique } from "../../../love/public/src/list_to_lookup_text_first_unique.mjs";
import { list_map_prefix_without_try_multiple } from "../../../love/public/src/list_map_prefix_without_try_multiple.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
import { list_to_dictionary_value } from "../../../love/public/src/list_to_dictionary_value.mjs";
export async function sandbox_3() {
  let books = await ebible_version_books("engbsb");
  let mapped2 = list_map_property(books, "text");
  let prefixes = ["1 ", "2 ", "3 "];
  let mapped = list_map_prefix_without_try_multiple(mapped2, prefixes);
  let result = list_to_lookup_text_first_unique(mapped);
  let alphabet_upper = list_alphabet_upper();
  function lambda(upper) {
    let value = [];
    let lower = text_lower_to(upper);
    function lambda2(letter) {
      let exists = property_exists(object, property_name);
      if (false) {
      }
    }
    each([lower, upper], lambda2);
  }
  let dictionary = list_to_dictionary_value(alphabet_upper, lambda);
  return result;
}
