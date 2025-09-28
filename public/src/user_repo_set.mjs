import { user_repo_path } from "./user_repo_path.mjs";
import { data_set } from "./data_set.mjs";
import { marker } from "./marker.mjs";
export async function user_repo_set(value) {
  marker("1");
  let f_path = user_repo_path();
  async function lambda(previous) {
    return value;
  }
  await data_set(lambda, "repo_current", f_path);
}
