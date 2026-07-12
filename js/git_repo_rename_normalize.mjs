import { text_replace } from "./text_replace.mjs";
import { git_repo_rename } from "./git_repo_rename.mjs";
export async function git_repo_rename_normalize(owner, name_old) {
  let name = text_replace(name_old, "-", "_");
  let stdout = await git_repo_rename(owner, name_old, name);
  let result = {
    name,
    stdout,
  };
  return result;
}
