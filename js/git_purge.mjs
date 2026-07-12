import { git_purge_only } from "./git_purge_only.mjs";
import { git_remove } from "./git_remove.mjs";
export async function git_purge(f_path) {
  await git_remove(f_path);
  await git_purge_only(f_path);
}
