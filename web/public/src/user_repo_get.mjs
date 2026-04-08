import { user_data_get } from "../../../love/public/src/user_data_get.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { repo_exists_assert } from "../../../love/public/src/repo_exists_assert.mjs";
export async function user_repo_get() {
  const property_name = "repo_current";
  let v = await user_data_get(property_name);
  let repo_name = property_get(v, "value");
  await repo_exists_assert(repo_name);
  return repo_name;
}
