import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { data_identifiers_search_generic } from "../../../love/public/src/data_identifiers_search_generic.mjs";
import { data_identifiers_get } from "../../../love/public/src/data_identifiers_get.mjs";
export async function data_identifiers_search(ids_comma) {
  arguments_assert(arguments, 1);
  let fn = data_identifiers_get;
  let result = await data_identifiers_search_generic(fn, ids_comma);
  return result;
}
