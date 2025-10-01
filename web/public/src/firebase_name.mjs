import { global_function_get } from "./global_function_get.mjs";
import { browser_is } from "./browser_is.mjs";
import { firebase_name_repo } from "../../../karate_code/public/src/firebase_name_repo.mjs";
import { user_repo_get } from "./user_repo_get.mjs";
export async function firebase_name() {
  if (browser_is()) {
    let value = global_function_get(firebase_name);
    return value;
  }
  let repo_name = await user_repo_get();
  let default2 = await firebase_name_repo(repo_name);
  return default2;
}
