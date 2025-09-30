import { path_repo_about } from "../../../love/public/src/path_repo_about.mjs";
import { data_get } from "../../../love/public/src/data_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function repo_acronym_get(repo) {
  marker("1");
  const key = "acronym";
  let a_path = path_repo_about(repo);
  let { value } = await data_get(key, null, a_path);
  let v = value;
  return v;
}
