import { firebase_name_repo } from "../../../love/public/src/firebase_name_repo.mjs";
import { user_repo_get } from "./user_repo_get.mjs";
export async function firebase_name() {
  let repo_name = await user_repo_get();
  let default2 = await firebase_name_repo(repo_name);
  return default2;
}
