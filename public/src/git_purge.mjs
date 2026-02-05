import { git_purge_only } from "../../../love/public/src/git_purge_only.mjs";
import { git_remove } from "../../../love/public/src/git_remove.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function git_purge(f_path) {
  await git_remove(f_path);
  await git_purge_only(f_path);
}
