import { arguments_assert } from "./arguments_assert.mjs";
import { data_identifiers_search_generic } from "./data_identifiers_search_generic.mjs";
import { data_identifiers_get } from "./data_identifiers_get.mjs";
export async function data_identifiers_search(ids_comma) {
  arguments_assert(arguments, 1);
  let result = await data_identifiers_search_generic(
    data_identifiers_get,
    ids_comma,
  );
  return result;
}
