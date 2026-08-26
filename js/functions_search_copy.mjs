import { clipboard_copy_value } from "./clipboard_copy_value.mjs";
import { functions_search } from "./functions_search.mjs";
export async function functions_search_copy(search) {
  "Search function names and put the answer on the clipboard as well as printing it, so a long list can be pasted somewhere rather than read off a terminal.";
  let r = await functions_search(search);
  await clipboard_copy_value(r);
  return r;
}
