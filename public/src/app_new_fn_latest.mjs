import { app_shared_name_latest } from "../../../love/public/src/app_shared_name_latest.mjs";
import { function_new } from "../../../love/public/src/function_new.mjs";
export async function app_new_fn_latest(name) {
  let combined = app_shared_name_latest(name);
  await function_new(combined);
}
