import { list_map } from "./list_map.mjs";
import { list_join_space } from "./list_join_space.mjs";
export function list_map_join_space(texts) {
  let passages_folders = list_map(texts, list_join_space);
  return passages_folders;
}
