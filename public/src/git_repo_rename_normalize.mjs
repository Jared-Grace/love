import { git_repo_rename } from "./git_repo_rename.mjs";
import { marker } from "./marker.mjs";
export async function git_repo_rename_normalize(from, to) {
  marker("1");
  let v = await git_repo_rename(from, to);
  return v;
}
