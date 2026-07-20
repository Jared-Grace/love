import { firebase_project_name_jg } from "./firebase_project_name_jg.mjs";
import { app_shared_main_latest } from "./app_shared_main_latest.mjs";
export async function app_message_latest() {
  await app_shared_main_latest("app_message", firebase_project_name_jg());
}
