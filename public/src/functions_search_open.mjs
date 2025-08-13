import { function_open } from "./function_open.mjs";
import { functions_names } from "./functions_names.mjs";
import { list_single } from "./list_single.mjs";
export async function functions_search_open() {
  let f_names = functions_names();
  let f_name = list_single(f_names);
  await function_open(f_name);
}
