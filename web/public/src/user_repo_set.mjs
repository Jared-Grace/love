import { user_data_set } from "../../../love/public/src/user_data_set.mjs";
import { user_repo_get } from "../../../love/public/src/user_repo_get.mjs";
import { repo_exists_assert } from "../../../love/public/src/repo_exists_assert.mjs";
import { repo_acronym_to_name } from "../../../love/public/src/repo_acronym_to_name.mjs";
export async function user_repo_set(value) {
  let repo_name = await repo_acronym_to_name(value);
  await repo_exists_assert(repo_name);
  const property_name = "repo_current";
  async function lambda(previous) {
    return repo_name;
  }
  await user_data_set(property_name, lambda);
  let repo_name2 = await user_repo_get();
  return repo_name2;
}
