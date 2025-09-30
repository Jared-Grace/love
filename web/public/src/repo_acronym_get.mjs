import { repo_about_get } from "../../../love/public/src/repo_about_get.mjs";
export async function repo_acronym_get(repo) {
  const key = "acronym";
  let v = await repo_about_get(repo, key);
  return v;
}
