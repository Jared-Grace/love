import { list_includes_assert } from "../../../love/public/src/list_includes_assert.mjs";
import { repos_names } from "../../../love/public/src/repos_names.mjs";
export async function repo_exists_assert(repo_name) {
  let all = await repos_names();
  list_includes_assert(all, repo_name);
}
