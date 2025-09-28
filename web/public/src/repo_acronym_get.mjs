import { path_repo } from "./path_repo.mjs";
import { path_join } from "./path_join.mjs";
import { data_set } from "./data_set.mjs";
import { data_path_generic } from "./data_path_generic.mjs";
import { marker } from "./marker.mjs";
export async function repo_acronym_get(repo) {
  marker("1");
  let f_path = data_path_generic("", "about");
  let r_path = path_repo(repo);
  let joined = path_join([r_path, f_path]);
  async function lambda(previous) {
    return value;
  }
  await data_set(lambda, "acronym", joined);
}
