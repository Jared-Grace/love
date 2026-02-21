import { functions_search } from "../../../love/public/src/functions_search.mjs";
import { function_open } from "../../../love/public/src/function_open.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { properties_get } from "../../../love/public/src/properties_get.mjs";
export async function functions_search_open(search) {
  let result = await functions_search(search);
  let properties = properties_get(result);
  let f_name = list_single(properties);
  await function_open(f_name);
}
