import { repos } from "./repos.mjs";
import { marker } from "./marker.mjs";
export async function repos_gitignore_overwrite() {
  marker("1");
  let f_name = ".gitignore";
  let all = await repos();
}
