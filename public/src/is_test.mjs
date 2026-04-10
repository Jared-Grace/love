import { data_identifiers_search } from "../../../love/public/src/data_identifiers_search.mjs";
export async function is_test(ids_comma) {
  let r = await data_identifiers_search(ids_comma);
  return r;
}
