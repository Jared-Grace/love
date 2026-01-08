import { data_set } from "../../../love/public/src/data_set.mjs";
import { user_repo_path } from "../../../love/public/src/user_repo_path.mjs";
export async function data_app_current_set(f_name) {
  async function lambda(previous) {
    return f_name;
  }
  let d_path = user_repo_path();
  await data_set(lambda, "app_current", d_path);
}
