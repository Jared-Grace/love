import { string_take_less_1 } from "../../../love/public/src/string_take_less_1.mjs";
import { string_ends_with } from "../../../love/public/src/string_ends_with.mjs";
import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function g_themes_verb(root) {
  marker("1");
  let root_ing = root;
  let ew = string_ends_with(root, "e");
  if (ew) {
    root_ing = string_take_less_1(root_ing);
  }
  let list = [root, root + "s"][root_ing + "ing"];
  let r = list_join_space(list);
  return r;
}
