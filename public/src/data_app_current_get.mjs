import { null_not_is_assert } from "./null_not_is_assert.mjs";
import { data_property_get } from "./data_property_get.mjs";
import { user_repo_path } from "./user_repo_path.mjs";
export async function data_app_current_get() {
  let d_path = user_repo_path();
  let a = await data_property_get("app_current", d_path);
  null_not_is_assert(a);
  return a;
}
