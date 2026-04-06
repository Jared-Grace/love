import { list_skip } from "../../../love/public/src/list_skip.mjs";
import { properties_size_1 } from "../../../karate_code/public/src/properties_size_1.mjs";
import { equal_not_curried_right } from "../../../karate_code/public/src/equal_not_curried_right.mjs";
import { data_identifiers_search } from "../../../love/public/src/data_identifiers_search.mjs";
export async function sandbox() {
  let s = equal_not_curried_right.name;
  let result = await data_identifiers_search(s);
  let s1 = properties_size_1(result);
  if (s1) {
    let skipped = list_skip(list, skip_count);
  } else {
  }
  return s1;
}
