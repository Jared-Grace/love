import { firebase_project_name_jg } from "./firebase_project_name_jg.mjs";
import { app_shared_main_latest } from "./app_shared_main_latest.mjs";
import { fn_name } from "./fn_name.mjs";
export async function app_g_hero_latest() {
  let firebase_name_value = firebase_project_name_jg();
  let f_name = fn_name("app_g_hero");
  await app_shared_main_latest(f_name, firebase_name_value);
}
