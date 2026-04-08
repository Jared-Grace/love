import { user_data_set } from "../../../love/public/src/user_data_set.mjs";
import { user_repo_path } from "../../../love/public/src/user_repo_path.mjs";
export async function data_app_current_set(f_name) {
  let d_path = user_repo_path();
  await user_data_set("app_current", d_path);
}
