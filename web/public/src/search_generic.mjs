import {string_includes} from './string_includes.mjs';
import {list_all} from './list_all.mjs';
import {list_filter} from './list_filter.mjs';
import {string_split} from './string_split.mjs';
export function search_generic(search, f_names) {
  let terms = string_split(search, ",");
  let f_names_search = list_filter(f_names, n => list_all(terms, term => string_includes(n, term)));
  return f_names_search;
}
