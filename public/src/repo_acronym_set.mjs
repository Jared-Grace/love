import { path_repo_about } from "./path_repo_about.mjs";
import { data_set } from "./data_set.mjs";
import { marker } from "./marker.mjs";
export async function repo_acronym_set(repo, value) {
  marker("1");
  let joined = path_repo_about(repo);
  async function lambda(previous) {
    return value;
  }
  await data_set(lambda, "acronym", joined);
}
