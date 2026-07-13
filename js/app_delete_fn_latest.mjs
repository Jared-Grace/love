import { app_shared_name_latest } from "./app_shared_name_latest.mjs";
import { function_delete } from "./function_delete.mjs";
export async function app_delete_fn_latest(name) {
  let combined = app_shared_name_latest(name);
  await function_delete(combined);
}
