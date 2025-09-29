import { assert } from "./assert.mjs";
import { repos_names } from "./repos_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { data_get } from "./data_get.mjs";
import { user_repo_path } from "./user_repo_path.mjs";
import { marker } from "./marker.mjs";
export async function user_repo_get() {
  marker("1");
  let f_path = user_repo_path();
  let { value: repo_name } = await data_get("repo_current", null, f_path);
  let all = await repos_names();
  let includes = list_includes(all, item);
  assert(b);
  return repo_name;
}
