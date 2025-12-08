import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
import { g_themes_plural_list } from "../../../love/public/src/g_themes_plural_list.mjs";
export function g_themes_plural(root) {
  let list = g_themes_plural_list(root);
  let r = list_join_space(list);
  return r;
}
