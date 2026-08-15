import { arguments_assert } from "./arguments_assert.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_join } from "./list_join.mjs";
export function gloss_parsing_head_named(sorts) {
  arguments_assert(arguments, 1);
  let head_words = [];
  let items = list_map_property(sorts, "phrase");
  list_add_multiple(head_words, items);
  let head_named = list_join(head_words, " or ");
  return head_named;
}
