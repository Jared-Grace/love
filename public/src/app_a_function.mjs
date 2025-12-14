import { app_a_function_refresh } from "../../../love/public/src/app_a_function_refresh.mjs";
import { js_parse } from "../../../love/public/src/js_parse.mjs";
import { storage_local_get } from "../../../love/public/src/storage_local_get.mjs";
import { app_api } from "../../../love/public/src/app_api.mjs";
import { fn_name } from "../../../love/public/src/fn_name.mjs";
export async function app_a_function(context) {
  let { app_fn, root } = context;
  let f_name = storage_local_get(app_fn, "f_name_selected");
  let function_name = fn_name("function_read");
  let code = await app_api(function_name, [f_name]);
  let ast = js_parse(code);
  app_a_function_refresh(root, context, ast);
}
