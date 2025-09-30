import { function_run } from "../../../love/public/src/function_run.mjs";
import { repo_firebase_service_account_get } from "../../../love/public/src/repo_firebase_service_account_get.mjs";
import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
export async function firebase_service_account() {
  let fn = await repo_firebase_service_account_get();
  let file_path = await function_run(fn, []);
  let service_account = await file_read_json(file_path);
  return service_account;
}
