import { app_new_step_5 } from "../../../love/public/src/app_new_step_5.mjs";
import { app_new_step_3 } from "../../../love/public/src/app_new_step_3.mjs";
import { html_update } from "../../../love/public/src/html_update.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_new_update(name) {
  marker("1");
  await app_new_step_3(name);
  await app_new_step_5(name);
  await html_update(name);
}
