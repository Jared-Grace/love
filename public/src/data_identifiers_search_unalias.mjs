import { text_split_comma_dot } from "../../../love/public/src/text_split_comma_dot.mjs";
import { data_identifiers_search } from "../../../love/public/src/data_identifiers_search.mjs";
export async function data_identifiers_search_unalias(ids_comma) {
  let split = text_split_comma_dot(ids_comma);
  let r = await data_identifiers_search(ids_comma);
  return r;
}
