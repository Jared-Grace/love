import { data_identifiers_search_generic_names } from "./data_identifiers_search_generic_names.mjs";
import { data_identifiers_get } from "./data_identifiers_get.mjs";
export async function data_identifiers_search_names(f_name) {
  "The same search by identifier as its sibling, giving back only the function names rather than the file each one lives in.";
  "It never asks where each one lives, so a function deleted since the record was gathered is still named here instead of failing the search - the way a group delete used to stop at its second name, 2026-11-08.";
  let f_names = await data_identifiers_search_generic_names(
    data_identifiers_get,
    f_name,
  );
  return f_names;
}
