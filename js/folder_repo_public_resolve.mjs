import { folder_repo_root_find } from "./folder_repo_root_find.mjs";
import { folder_public } from "./folder_public.mjs";
import { path_resolve } from "./path_resolve.mjs";
import { path_join } from "./path_join.mjs";
export async function folder_repo_public_resolve(start_dir) {
  let repo_root = folder_repo_root_find(start_dir);
  let result = await path_resolve(path_join([repo_root, folder_public()]));
  return result;
}
