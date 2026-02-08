import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
export function list_map_join_space(texts) {
  function folder_map(v) {
    let p = list_join_space(v);
    return p;
  }
  let passages_folders = list_map(texts, folder_map);
  return passages_folders;
}
