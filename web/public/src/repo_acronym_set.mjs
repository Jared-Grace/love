import { repo_about_set } from "../../../love/public/src/repo_about_set.mjs";
export async function repo_acronym_set(repo, value) {
  let key = "acronym";
  await repo_about_set(repo, value, key);
}
