import { user_data_set } from "../../../love/public/src/user_data_set.mjs";
export async function data_app_current_set(f_name) {
  await user_data_set("app_current", f_name);
}
