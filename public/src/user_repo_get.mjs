import { user_data_get } from "../../../love/public/src/user_data_get.mjs";
import { repo_exists_assert } from "../../../love/public/src/repo_exists_assert.mjs";
export async function user_repo_get() {
  const property_name = "repo_current";
  let repo_name = await user_data_get(property_name);
  await repo_exists_assert(repo_name);
  return repo_name;
}
