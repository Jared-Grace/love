import { data_identifiers_search } from "../../../love/public/src/data_identifiers_search.mjs";
export async function data_identifiers_search_multiple(s) {
  let r = await data_identifiers_search(s);
  return r;
}
