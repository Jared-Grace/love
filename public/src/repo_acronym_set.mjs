import { user_repo_get } from "./user_repo_get.mjs";
import { path_join } from "./path_join.mjs";
import { data_set } from "./data_set.mjs";
import { data_path_generic } from "./data_path_generic.mjs";
import { marker } from "./marker.mjs";
import { folder_previous } from "./folder_previous.mjs";
export async function repo_acronym_set(value) {
  marker("1");
  let repo = await user_repo_get();
  let f_path = data_path_generic("", "about");
  let previous2 = folder_previous();
  let joined = path_join([previous2, repo, f_path]);
  let joined2 = path_join(segments);
  async function lambda(previous) {
    return value;
  }
  await data_set(lambda, "acronym", joined);
}
