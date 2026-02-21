import { list_wait } from "../../../love/public/src/list_wait.mjs";
import { function_format } from "../../../love/public/src/function_format.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export async function functions_format() {
  let mapped = list_map(await functions_names(), function_format);
  await list_wait(mapped);
}
