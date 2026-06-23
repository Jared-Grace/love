import { functions_search } from "../../../love/public/src/functions_search.mjs";
import { function_new_open } from "../../../love/public/src/function_new_open.mjs";
export async function grace() {
  await function_new_open(f_name);
  let result = await functions_search("grace");
}
