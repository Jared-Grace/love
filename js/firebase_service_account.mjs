import { function_run_unalias } from "./function_run_unalias.mjs";
import { user_repo_firebase_service_account_get } from "./user_repo_firebase_service_account_get.mjs";
import { file_read_json } from "./file_read_json.mjs";
export async function firebase_service_account() {
  let f_name = await user_repo_firebase_service_account_get();
  let file_path = await function_run_unalias(f_name, []);
  let service_account = await file_read_json(file_path);
  return service_account;
}
