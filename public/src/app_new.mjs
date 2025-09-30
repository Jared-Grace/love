import { app_new_step_1 } from "../../../love/public/src/app_new_step_1.mjs";
import { app_new_step_2 } from "../../../love/public/src/app_new_step_2.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_new(name) {
  marker("1");
  await app_new_step_1(name);
  await app_new_step_2(name);
}
