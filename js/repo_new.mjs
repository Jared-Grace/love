import { git_repo_new } from "./git_repo_new.mjs";
import { repo_new_local } from "./repo_new_local.mjs";
export async function repo_new(repo_name) {
  let folder = await repo_new_local(repo_name);
  await git_repo_new(repo_name, folder);
  return folder;
}
