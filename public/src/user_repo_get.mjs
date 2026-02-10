import { property_get } from "../../../love/public/src/property_get.mjs";
import { repo_exists_assert } from "../../../love/public/src/repo_exists_assert.mjs";
import { data_get } from "../../../love/public/src/data_get.mjs";
import { user_repo_path } from "../../../love/public/src/user_repo_path.mjs";
export async function user_repo_get() {
  let f_path = user_repo_path();
  let v = await data_get("repo_current", null, f_path);
  let repo_name = property_get(v, "value");
  await repo_exists_assert(repo_name);
  return repo_name;
}
