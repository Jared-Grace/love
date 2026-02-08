import { list_to_dictionary_value } from "../../../love/public/src/list_to_dictionary_value.mjs";
import { list_all } from "../../../love/public/src/list_all.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { text_split } from "../../../love/public/src/text_split.mjs";
export function search_generic(search, list, value_get, include) {
  let terms = text_split(search, ",");
  function filter(item) {
    function lambda(term) {
      let v = include(item, term);
      return v;
    }
    let v2 = list_all(terms, lambda);
    return v2;
  }
  let f_names_search = list_filter(list, filter);
  let result = list_to_dictionary_value(f_names_search, value_get);
  return result;
}
