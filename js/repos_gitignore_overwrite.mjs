import { repos_gitignore_overwrite_list } from "./repos_gitignore_overwrite_list.mjs";
export async function repos_gitignore_overwrite(repo_name) {
  await repos_gitignore_overwrite_list([repo_name]);
}
