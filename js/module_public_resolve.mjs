import { module_dirname } from "./module_dirname.mjs";
import { folder_repo_public_resolve } from "./folder_repo_public_resolve.mjs";
export async function module_public_resolve(meta) {
  let dirname = await module_dirname(meta);
  let result = await folder_repo_public_resolve(dirname);
  return result;
}
