import { string_replace } from "./string_replace.mjs";
import { git_repo_rename } from "./git_repo_rename.mjs";
import { marker } from "./marker.mjs";
export async function git_repo_rename_normalize(from) {
  marker("1");
  let name = string_replace(from, "-", "_");
  let stdout = await git_repo_rename(from, name);
  let v = {
    name,
    stdout,
  };
  return v;
}
