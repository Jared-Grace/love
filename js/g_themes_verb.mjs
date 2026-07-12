import { g_themes_plural_list } from "./g_themes_plural_list.mjs";
import { list_add } from "./list_add.mjs";
import { text_take_less_1 } from "./text_take_less_1.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { text_combine } from "./text_combine.mjs";
export function g_themes_verb(root) {
  let root_ing = root;
  let ew = text_ends_with(root, "e");
  if (ew) {
    root_ing = text_take_less_1(root_ing);
  }
  let list = g_themes_plural_list(root);
  list_add(list, text_combine(root_ing, "ing"));
  let r = list_join_space(list);
  return r;
}
