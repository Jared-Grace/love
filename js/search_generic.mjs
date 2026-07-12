import { list_sort_text } from "./list_sort_text.mjs";
import { text_split_comma_dot } from "./text_split_comma_dot.mjs";
import { list_to_dictionary_value } from "./list_to_dictionary_value.mjs";
import { list_all } from "./list_all.mjs";
import { list_filter } from "./list_filter.mjs";
export function search_generic(search, list, value_get, include) {
  let terms = text_split_comma_dot(search);
  function filter(item) {
    function lambda(term) {
      let v = include(item, term);
      return v;
    }
    let v2 = list_all(terms, lambda);
    return v2;
  }
  let f_names_search = list_filter(list, filter);
  list_sort_text(f_names_search);
  let result = list_to_dictionary_value(f_names_search, value_get);
  return result;
}
