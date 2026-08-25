import { clipboard_copy_value } from "./clipboard_copy_value.mjs";
import { data_identifiers_search } from "./data_identifiers_search.mjs";
export async function data_identifiers_search_copy(ids_comma) {
  let r = await data_identifiers_search(ids_comma);
  await clipboard_copy_value(r);
  return r;
}
