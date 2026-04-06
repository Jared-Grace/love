import { equal_not_curried_right } from "../../../karate_code/public/src/equal_not_curried_right.mjs";
import { data_identifiers_search } from "../../../love/public/src/data_identifiers_search.mjs";
export async function sandbox() {
  let s = equal_not_curried_right.name;
  let result = await data_identifiers_search(s);
}
