import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { data_identifiers_search_generic } from "../../../love/public/src/data_identifiers_search_generic.mjs";
import { function_name_to_path_unalias } from "../../../love/public/src/function_name_to_path_unalias.mjs";
import { data_identifiers_get } from "../../../love/public/src/data_identifiers_get.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function data_identifiers_search(s) {
  assert_arguments(arguments, 1);
  let fn = data_identifiers_get;
  const v = await function_name_to_path_unalias(s);
  let unaliased = property_get(v, "unaliased");
  s = unaliased;
  let result = await data_identifiers_search_generic(fn, s);
  return result;
}
