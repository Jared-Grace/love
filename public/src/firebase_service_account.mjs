import { firebase_service_account_love } from "../../../love/public/src/firebase_service_account_love.mjs";
import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
export async function firebase_service_account() {
  let file_path = await firebase_service_account_love();
  let service_account = await file_read_json(file_path);
  return service_account;
}
