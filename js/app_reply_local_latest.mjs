import { app_shared_main_latest } from "./app_shared_main_latest.mjs";
export async function app_reply_local_latest() {
  await app_shared_main_latest("app_reply_local", firebase_project_name_jg());
}
