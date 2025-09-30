import { repo_about_get } from "../../../love/public/src/repo_about_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function repo_acronym_get(repo) {
  marker("1");
  const key = "acronym";
  let v = await repo_about_get(repo, key);
  return v;
}
