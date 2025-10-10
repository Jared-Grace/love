import { marker } from "../../../love/public/src/marker.mjs";
import { app_name_staging } from "../../../love/public/src/app_name_staging.mjs";
import { function_new } from "../../../love/public/src/function_new.mjs";
export async function app_new_fn_staging(name) {
  marker("1");
  let combined = app_name_staging(name);
  await function_new(combined);
}
