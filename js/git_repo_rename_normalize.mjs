import { string_replace } from "../../../love/public/src/string_replace.mjs";
import { git_repo_rename } from "../../../love/public/src/git_repo_rename.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function git_repo_rename_normalize(owner, name_old) {
  marker("1");
  let name = string_replace(name_old, "-", "_");
  let stdout = await git_repo_rename(owner, name_old, name);
  let result = {
    name,
    stdout,
  };
  return result;
}
