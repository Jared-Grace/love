import { path_repo_about } from "./path_repo_about.mjs";
import { data_get } from "./data_get.mjs";
import { marker } from "./marker.mjs";
export async function repo_acronym_get(repo) {
  marker("1");
  let a_path = path_repo_about(repo);
  let v = await data_get("acronym", null, a_path);
  return v;
}
