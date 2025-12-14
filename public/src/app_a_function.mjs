import { app_a_function_refresh } from "../../../love/public/src/app_a_function_refresh.mjs";
import { storage_local_get } from "../../../love/public/src/storage_local_get.mjs";
import { app_api } from "../../../love/public/src/app_api.mjs";
import { fn_name } from "../../../love/public/src/fn_name.mjs";
export async function app_a_function(context) {
  let { app_fn } = context;
  let f_name = storage_local_get(app_fn, "f_name_selected");
  let function_name = fn_name("function_parse");
  let { ast } = await app_api(function_name, [f_name]);
  app_a_function_refresh(context, ast);
}
