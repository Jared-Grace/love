import { repos_gitignore_overwrite_list } from "./repos_gitignore_overwrite_list.mjs";
import { repos_names } from "./repos_names.mjs";
export async function repos_gitignore_overwrite_all() {
  let repos = await repos_names();
  await repos_gitignore_overwrite_list(repos);
}
