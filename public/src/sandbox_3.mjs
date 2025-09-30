import { repos_paths_map_unordered_combine_squash } from "../../../love/public/src/repos_paths_map_unordered_combine_squash.mjs";
import { identity } from "./identity.mjs";
export async function sandbox_3() {
  let squashed = await repos_paths_map_unordered_combine_squash(identity);
  return squashed;
}
