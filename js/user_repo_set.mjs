import { user_repo_get } from "../../../love/public/src/user_repo_get.mjs";
import { repo_exists_assert } from "../../../love/public/src/repo_exists_assert.mjs";
import { repo_acronym_to_name } from "../../../love/public/src/repo_acronym_to_name.mjs";
import { user_repo_path } from "../../../love/public/src/user_repo_path.mjs";
import { data_set } from "../../../love/public/src/data_set.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function user_repo_set(value) {
  marker("1");
  let repo_name = await repo_acronym_to_name(value);
  await repo_exists_assert(repo_name);
  let f_path = user_repo_path();
  async function lambda(previous) {
    return repo_name;
  }
  await data_set(lambda, "repo_current", f_path);
  let repo_name2 = await user_repo_get();
  return repo_name2;
}
