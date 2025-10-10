import { app_new_step_3_generic } from "../../../love/public/src/app_new_step_3_generic.mjs";
import { app_name_prefixed } from "../../../love/public/src/app_name_prefixed.mjs";
import { app_main_production } from "../../../love/public/src/app_main_production.mjs";
export async function app_new_production(name) {
  let a_name = app_name_prefixed(name);
  await app_new_step_3_generic(name, app_main_production, a_name);
}
