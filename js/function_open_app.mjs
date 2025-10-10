import { user_repo_path } from "../../../love/public/src/user_repo_path.mjs";
import { data_set } from "../../../love/public/src/data_set.mjs";
import { app_name_prefixed } from "../../../love/public/src/app_name_prefixed.mjs";
import { function_open } from "../../../love/public/src/function_open.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_open_app(f_name) {
  marker("1");
  let a_name = app_name_prefixed(f_name);
  let v = await function_open(a_name);
  async function lambda(previous) {
    return f_name;
  }
  let d_path = user_repo_path();
  await data_set(lambda, "app_current", d_path);
  return v;
}
