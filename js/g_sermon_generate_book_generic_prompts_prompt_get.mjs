import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { add_1 } from "./add_1.mjs";
import { list_new_multiple } from "./list_new_multiple.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_join_space } from "./list_map_join_space.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_add } from "./list_add.mjs";
import { list_map } from "./list_map.mjs";
import { list_add_pair } from "./list_add_pair.mjs";
import { each } from "./each.mjs";
import { list_join } from "./list_join.mjs";
export function g_sermon_generate_book_generic_prompts_prompt_get(
  groups_prompted,
  bible_folders,
) {
  arguments_assert(arguments, 2);
  let size = list_size(bible_folders);
  let a = add_1(size);
  let r = list_new_multiple(a);
  function each_group(group) {
    let texts = property_get(group, "texts");
    let passages_folders_group = list_map_join_space(texts);
    let originals = property_get(group, "originals");
    let original = list_join_space(originals);
    list_add(passages_folders_group, original);
    return passages_folders_group;
  }
  let passages_folders = list_map(groups_prompted, each_group);
  function lambda(item) {
    list_add_pair(r, item);
  }
  each(passages_folders, lambda);
  let mapped = list_map_join_space(r);
  let user_prompt = list_join(mapped, " :: ");
  return user_prompt;
}
