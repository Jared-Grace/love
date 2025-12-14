import { function_parse } from "../../../love/public/src/function_parse.mjs";
import { app_a_function_refresh } from "../../../love/public/src/app_a_function_refresh.mjs";
import { storage_local_get } from "../../../love/public/src/storage_local_get.mjs";
import { fn_name } from "../../../love/public/src/fn_name.mjs";
export async function app_a_function(context) {
  let { app_fn } = context;
  let f_name = storage_local_get(app_fn, "f_name_selected");
  let function_name = fn_name("function_parse");
  let { ast } = await function_parse();
  app_a_function_refresh(context, ast);
}
