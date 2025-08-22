import { functions_search } from "./functions_search.mjs";
import { function_open } from "./function_open.mjs";
import { list_single } from "./list_single.mjs";
import { object_properties } from "./object_properties.mjs";
export async function functions_search_open(search) {
  let result = await functions_search(search);
  let properties = object_properties(result);
  let f_name = list_single(properties);
  await function_open(f_name);
}
