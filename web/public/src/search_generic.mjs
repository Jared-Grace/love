import { marker } from "../../../love/public/src/marker.mjs";
import { list_to_dictionary } from "../../../love/public/src/list_to_dictionary.mjs";
import { list_all } from "../../../love/public/src/list_all.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { string_split } from "../../../love/public/src/string_split.mjs";
export function search_generic(search, list, value_get, include) {
  marker("1");
  let terms = string_split(search, ",");
  function filter(item) {
    function lambda(term) {
      let v = include(item, term);
      return v;
    }
    let v2 = list_all(terms, lambda);
    return v2;
  }
  let f_names_search = list_filter(list, filter);
  let result = list_to_dictionary(f_names_search, value_get);
  return result;
}
