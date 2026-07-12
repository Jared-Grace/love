import { property_get } from "./property_get.mjs";
import { app_shared_name_search_info } from "./app_shared_name_search_info.mjs";
export async function app_shared_name_search_main(name) {
  let a = await app_shared_name_search_info(name);
  let f_name = property_get(a, "f_name");
  return f_name;
}
