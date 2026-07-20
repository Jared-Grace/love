import { app_shared_main_latest } from "./app_shared_main_latest.mjs";
export async function app_next_latest() {
  await app_shared_main_latest("app_next", firebase_project_name_jg());
}
