import { app_new_step_2 } from "../../../love/public/src/app_new_step_2.mjs";
import { app_new_step_3 } from "../../../love/public/src/app_new_step_3.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { html_new } from "../../../love/public/src/html_new.mjs";
export async function app_new_step_2_next(name) {
  marker("1");
  await app_new_step_2(name);
  await app_new_step_3(name);
  await html_new(name);
}
