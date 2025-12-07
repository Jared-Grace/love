import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function g_themes_verb(root) {
  marker("1");
  let list = [root, root + "s", root + "ing"];
  let r = list_join_space(list);
  return r;
}
