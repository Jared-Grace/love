import { firebase_name_browser } from "../../../love/public/src/firebase_name_browser.mjs";
import { firebase_name_repo } from "../../../love/public/src/firebase_name_repo.mjs";
import { browser_is } from "./browser_is.mjs";
import { user_repo_get } from "./user_repo_get.mjs";
export async function firebase_name() {
  if (browser_is()) {
    let r = firebase_name_browser();
    return r;
  }
  let repo_name = await user_repo_get();
  let default2 = await firebase_name_repo(repo_name);
  return default2;
}
