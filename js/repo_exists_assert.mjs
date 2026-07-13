import { list_includes_assert_json } from "./list_includes_assert_json.mjs";
import { repos_names } from "./repos_names.mjs";
export async function repo_exists_assert(repo_name) {
  let all = await repos_names();
  list_includes_assert_json(all, repo_name, {
    hint: "no repo with this name was found — check the repo name?",
    repo_name,
  });
}
