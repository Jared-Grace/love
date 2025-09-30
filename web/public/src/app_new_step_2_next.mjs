import { app_new_step_2 } from "../../../love/public/src/app_new_step_2.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { html_new } from "../../../love/public/src/html_new.mjs";
import { function_new } from "../../../love/public/src/function_new.mjs";
import { app_name_main } from "../../../love/public/src/app_name_main.mjs";
export async function app_new_step_2_next(name) {
  marker("1");
  let combined = app_name_main(name);
  await function_new(combined);
  await app_new_step_2(name);
  await html_new(name);
}
