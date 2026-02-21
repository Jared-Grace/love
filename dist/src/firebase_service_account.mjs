import { function_run_unalias } from "../../../love/public/src/function_run_unalias.mjs";
import { user_repo_firebase_service_account_get } from "../../../love/public/src/user_repo_firebase_service_account_get.mjs";
import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
export async function firebase_service_account() {
  let f_name = await user_repo_firebase_service_account_get();
  let file_path = await function_run_unalias(f_name, []);
  let service_account = await file_read_json(file_path);
  return service_account;
}
