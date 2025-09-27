import { string_replace } from "./string_replace.mjs";
import { git_repo_rename } from "./git_repo_rename.mjs";
import { marker } from "./marker.mjs";
export async function git_repo_rename_normalize(from) {
  marker("1");
  let replaced = string_replace(s, from2, to2);
  let v = await git_repo_rename(from, to);
  return v;
}
