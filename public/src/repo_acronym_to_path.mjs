import { path_repo } from "./path_repo.mjs";
import { repo_acronym_to_name } from "./repo_acronym_to_name.mjs";
export async function repo_acronym_to_path(acronym) {
  let repo_name = await repo_acronym_to_name(acronym);
  let folder = path_repo(repo_name);
  return folder;
}
