import { repo_firebase_service_account_get } from "../../../love/public/src/repo_firebase_service_account_get.mjs";
import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
export async function firebase_service_account() {
  let file_path = await repo_firebase_service_account_get();
  let service_account = await file_read_json(file_path);
  return service_account;
}
