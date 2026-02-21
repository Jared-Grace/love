import { null_not_is_assert } from "../../../love/public/src/null_not_is_assert.mjs";
import { data_property_get_generic } from "../../../love/public/src/data_property_get_generic.mjs";
import { user_repo_path } from "../../../love/public/src/user_repo_path.mjs";
export async function data_app_current_get() {
  let d_path = user_repo_path();
  let a = await data_property_get_generic(d_path, "app_current");
  null_not_is_assert(a);
  return a;
}
