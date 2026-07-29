import { fn_name } from "./fn_name.mjs";
import { firebase_project_name_jg } from "./firebase_project_name_jg.mjs";
import { app_shared_main_latest } from "./app_shared_main_latest.mjs";
export async function app_calendar_latest() {
  let firebase_name_value = firebase_project_name_jg();
  await app_shared_main_latest(fn_name("app_calendar"), firebase_name_value);
}
