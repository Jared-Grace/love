import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { property_list_map_property } from "./property_list_map_property.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { each } from "./each.mjs";
import { list_join_newline_2_copy } from "./list_join_newline_2_copy.mjs";
export async function app_verses_copy(verse_groups) {
  arguments_assert(arguments, 1);
  let lines = [];
  function group_each(group) {
    let reference = property_get(group, "reference");
    list_add(lines, reference);
    let texts = property_list_map_property(group, "entries", "text");
    list_add_multiple(lines, texts);
  }
  each(verse_groups, group_each);
  await list_join_newline_2_copy(lines);
}
