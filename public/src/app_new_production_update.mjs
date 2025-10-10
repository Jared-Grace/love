import { marker } from "../../../love/public/src/marker.mjs";
import { app_new_update_generic } from "../../../love/public/src/app_new_update_generic.mjs";
import { app_name_prefixed } from "../../../love/public/src/app_name_prefixed.mjs";
import { app_main_production } from "../../../love/public/src/app_main_production.mjs";
export async function app_new_production_update(name) {
  marker("1");
  let a_name = app_name_prefixed(name);
  await app_new_update_generic(name, app_main_production, a_name);
}
