import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_get } from "./list_get.mjs";
import { list_map_property_unique } from "./list_map_property_unique.mjs";
import { list_size } from "./list_size.mjs";
import { list_spread_take } from "./list_spread_take.mjs";
import { list_map } from "./list_map.mjs";
export function gloss_roots_disagreeing_classes_count_read(r3) {
  arguments_assert(arguments, 1);
  let grouped = property_get(r3, "grouped");
  let apart_by_edits = property_get(r3, "apart_by_edits");
  let total = property_get(r3, "total");
  let claimed_total = property_get(r3, "claimed_total");
  let by_edits = property_get(r3, "by_edits");
  let by_relation = property_get(r3, "by_relation");
  function group_read(group) {
    let items = property_get(group, "items");
    let first = list_get(items, 0);
    let words = list_map_property_unique(items, "word");
    let list = list_map_property_unique(items, "chapter_code");
    let r2 = {
      root: property_get(first, "root"),
      claimed: property_get(first, "claimed_nearest"),
      edits: property_get(first, "edits"),
      relation: property_get(first, "relation"),
      count: list_size(items),
      words: list_spread_take(words, 5),
      chapters: list_spread_take(list, 3),
    };
    return r2;
  }
  let classes = list_map(grouped, group_read);
  function count_read(one_class) {
    let count = property_get(one_class, "count");
    return count;
  }
  let r = {
    apart_by_edits,
    total,
    claimed_total,
    by_edits,
    by_relation,
    classes,
    count_read,
  };
  return r;
}
