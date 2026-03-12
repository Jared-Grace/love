import { repos_gitignore_overwrite_list } from "../../../love/public/src/repos_gitignore_overwrite_list.mjs";
import { repos_names } from "../../../love/public/src/repos_names.mjs";
export async function repos_gitignore_overwrite() {
  let repos = await repos_names();
  await repos_gitignore_overwrite_list(repos);
}
