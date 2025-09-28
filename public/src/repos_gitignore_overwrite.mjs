import { list_map } from "./list_map.mjs";
import { repos } from "./repos.mjs";
import { marker } from "./marker.mjs";
export async function repos_gitignore_overwrite() {
  marker("1");
  let f_name = ".gitignore";
  let all = await repos();
  function lambda(item) {}
  let mapped = list_map(list, lambda);
}
