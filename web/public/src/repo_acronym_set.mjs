import { path_repo_about } from "../../../love/public/src/path_repo_about.mjs";
import { data_set } from "../../../love/public/src/data_set.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function repo_acronym_set(repo, value) {
  marker("1");
  let a_path = path_repo_about(repo);
  async function lambda(previous) {
    return value;
  }
  await data_set(lambda, "acronym", a_path);
}
