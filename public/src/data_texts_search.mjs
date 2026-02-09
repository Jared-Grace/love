import { data_texts_get } from "../../../love/public/src/data_texts_get.mjs";
import { data_identifiers_search_generic } from "../../../love/public/src/data_identifiers_search_generic.mjs";
export async function data_texts_search(s) {
  let result = await data_identifiers_search_generic(data_texts_get, s);
  return result;
}
