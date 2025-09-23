import { app_new_step_2 } from "./app_new_step_2.mjs";
import { app_name_prefixed } from "./app_name_prefixed.mjs";
import { function_new } from "./function_new.mjs";
import { marker } from "./marker.mjs";
export async function app_new(name) {
  marker("1");
  let a_name = app_name_prefixed(name);
  await function_new(a_name);
  await app_new_step_2(name);
}
