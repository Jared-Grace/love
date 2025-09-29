import { repo_acronym_to_name } from "./repo_acronym_to_name.mjs";
import { repo_path } from "./repo_path.mjs";
export async function repo_acronym_to_path(acronym) {
  let repo_name = await repo_acronym_to_name(acronym);
  let folder = repo_path(repo_name);
  return folder;
}
