import { object_property_set } from "./object_property_set.mjs";
import { each } from "./each.mjs";
import { string_includes } from "./string_includes.mjs";
import { list_all } from "./list_all.mjs";
import { list_filter } from "./list_filter.mjs";
import { string_split } from "./string_split.mjs";
import { log } from "./log.mjs";
export function search_generic(search, f_names, value_get) {
  let terms = string_split(search, ",");log(terms)
  let f_names_search = list_filter(f_names, (n) =>
    {log({n})
      return list_all(terms, (term) => string_includes(n, term))},
  );
  let result = {};
  each(f_names_search, (n) => {
    let value = value_get(n);
    object_property_set(result, n, value);
  });
  return result;
}
