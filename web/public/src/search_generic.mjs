import { list_to_dictionary } from "./list_to_dictionary.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { each } from "./each.mjs";
import { string_includes } from "./string_includes.mjs";
import { list_all } from "./list_all.mjs";
import { list_filter } from "./list_filter.mjs";
import { string_split } from "./string_split.mjs";
import { log } from "./log.mjs";
export function search_generic(search, list, value_get) {
  let terms = string_split(search, ",");
  function lambda2(n) {
    function lambda(term) {
      let v = string_includes(n, term);
      return v;
    }
    let v2 = list_all(terms, lambda);
    return v2;
  }
  let f_names_search = list_filter(list, lambda2);
  let dictionary = list_to_dictionary(list2, function lambda4(item) {});
  let result = {};
  function lambda3(n) {
    let value = value_get(n);
    object_property_set(result, n, value);
  }
  each(f_names_search, lambda3);
  return result;
}
