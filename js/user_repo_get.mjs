import { repo_exists_assert } from "../../../love/public/src/repo_exists_assert.mjs";
import { data_get } from "../../../love/public/src/data_get.mjs";
import { user_repo_path } from "../../../love/public/src/user_repo_path.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function user_repo_get() {
  marker("1");
  let f_path = user_repo_path();
  let { value: repo_name } = await data_get("repo_current", null, f_path);
  await repo_exists_assert(repo_name);
  return repo_name;
}
