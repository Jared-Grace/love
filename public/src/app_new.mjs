import { app_new_step_2 } from "../../../love/public/src/app_new_step_2.mjs";
import { app_name_prefixed } from "../../../love/public/src/app_name_prefixed.mjs";
import { function_new } from "../../../love/public/src/function_new.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_new(name) {
  marker("1");
  await app_new_step_1(name);
  await app_new_step_2(name);
}
async function app_new_step_1(name) {
  let a_name = app_name_prefixed(name);
  await function_new(a_name);
}

