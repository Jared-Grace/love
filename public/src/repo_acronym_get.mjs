import { path_repo_combine } from "./path_repo_combine.mjs";
import { data_get } from "./data_get.mjs";
import { data_path_generic } from "./data_path_generic.mjs";
import { marker } from "./marker.mjs";
export async function repo_acronym_get(repo) {
  marker("1");
  let f_path = data_path_generic("", "about");
  let joined = path_repo_combine(repo, f_path);
  await data_get("acronym", null, joined);
}
