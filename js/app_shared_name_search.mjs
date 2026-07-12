import { app_shared_name_search_multiple } from "./app_shared_name_search_multiple.mjs";
import { list_single } from "./list_single.mjs";
export async function app_shared_name_search(search) {
  let a_names = await app_shared_name_search_multiple(search);
  let a_name = list_single(a_names);
  return a_name;
}
