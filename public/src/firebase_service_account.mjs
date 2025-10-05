import { function_run } from "../../../love/public/src/function_run.mjs";
import { user_repo_firebase_service_account_get } from "../../../karate_code/public/src/user_repo_firebase_service_account_get.mjs";
import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
export async function firebase_service_account() {
  let fn = await user_repo_firebase_service_account_get();
  let file_path = await function_run(fn, []);
  let service_account = await file_read_json(file_path);
  return service_account;
}
