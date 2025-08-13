import { functions_search } from "./functions_search.mjs";
import { function_open } from "./function_open.mjs";
import { functions_names } from "./functions_names.mjs";
import { list_single } from "./list_single.mjs";
import { object_properties } from "./object_properties.mjs";
export async function functions_search_open() {
  let result = await functions_search(search);
  let result2 = object_properties(obj);
  let f_name = list_single(f_names);
  await function_open(f_name);
}
