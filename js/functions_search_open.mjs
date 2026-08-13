import { functions_search_all } from "./functions_search_all.mjs";
import { function_open } from "./function_open.mjs";
import { list_single } from "./list_single.mjs";
import { properties_get } from "./properties_get.mjs";
export async function functions_search_open(search) {
  let result = await functions_search_all(search);
  let properties = properties_get(result);
  let f_name = list_single(properties);
  await function_open(f_name);
}
