import { data_get } from "./data_get.mjs";
import { user_repo_path } from "./user_repo_path.mjs";
import { marker } from "./marker.mjs";
export async function user_repo_get() {
  marker("1");
  let f_path = user_repo_path();
  let { value: repo } = await data_get("repo_current", null, f_path);
  return repo;
}
