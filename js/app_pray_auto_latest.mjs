import { app_shared_main_latest } from "./app_shared_main_latest.mjs";
import { firebase_project_name_jg } from "./firebase_project_name_jg.mjs";
export async function app_pray_auto_latest() {
  await app_shared_main_latest("app_pray_auto", firebase_project_name_jg());
}
