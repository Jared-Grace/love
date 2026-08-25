import { clipboard_copy_value } from "./clipboard_copy_value.mjs";
import { functions_search } from "./functions_search.mjs";
export async function functions_search_copy(search) {
  let r = await functions_search(search);
  await clipboard_copy_value(r);
  return r;
}
