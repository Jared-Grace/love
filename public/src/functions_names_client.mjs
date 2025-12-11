import { app_a_api_cache_global } from "../../../love/public/src/app_a_api_cache_global.mjs";
import { fn_name } from "../../../love/public/src/fn_name.mjs";
export async function functions_names_client() {
  let function_name = fn_name("functions_names");
  let f_names = await app_a_api_cache_global(function_name, []);
  return f_names;
}
