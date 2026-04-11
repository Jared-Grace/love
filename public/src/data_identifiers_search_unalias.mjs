import { function_aliases_to_names } from "../../../love/public/src/function_aliases_to_names.mjs";
import { data_identifiers_search } from "../../../love/public/src/data_identifiers_search.mjs";
export async function data_identifiers_search_unalias(aliases_comma) {
  let names = await function_aliases_to_names(aliases_comma);
  let r = await data_identifiers_search(names);
  return r;
}
