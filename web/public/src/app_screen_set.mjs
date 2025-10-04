import { function_name_prefix_without } from "../../../karate_code/public/src/function_name_prefix_without.mjs";
import { storage_local_set_context } from "../../../love/public/src/storage_local_set_context.mjs";
import { app_refresh } from "../../../love/public/src/app_refresh.mjs";
export function app_screen_set(context, fn) {
  let without = function_name_prefix_without(fn2, fn_prefix);
  storage_local_set_context(context, "screen", value);
  app_refresh(context);
}
