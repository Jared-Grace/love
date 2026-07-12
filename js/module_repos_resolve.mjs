import { module_dirname } from "./module_dirname.mjs";
import { folder_repos_resolve } from "./folder_repos_resolve.mjs";
export async function module_repos_resolve(meta) {
  let dirname = await module_dirname(meta);
  let result = await folder_repos_resolve(dirname);
  return result;
}
