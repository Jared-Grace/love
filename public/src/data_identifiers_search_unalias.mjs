import { data_identifiers_search } from "../../../love/public/src/data_identifiers_search.mjs";
export async function data_identifiers_search_unalias(ids_comma) {
  let r = await data_identifiers_search(ids_comma);
  return r;
}
