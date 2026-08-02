import { property_greater_than } from "./property_greater_than.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { function_comments_migrate } from "./function_comments_migrate.mjs";
import { list_filter } from "./list_filter.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function function_comments_migrate_multiple(names_comma) {
  "Migrate the comments of many functions and report the two numbers worth knowing: how many files were rewritten, and which ones still hold a comment that had to be left behind. Files that needed nothing are counted and not named, since a list of everything buries the part that needs reading.";
  let names = text_split_comma(names_comma);
  let results = await list_map_async(names, function_comments_migrate);
  function changed_is(result) {
    let changed_inner = property_get(result, "changed");
    return changed_inner;
  }
  function left_is(result) {
    let any = property_greater_than(result, "left", 0);
    return any;
  }
  let changed = list_filter(results, changed_is);
  let left = list_filter(results, left_is);
  let r = {
    asked: list_size(names),
    changed: list_size(changed),
    by_hand: list_map_property(left, "name"),
  };
  return r;
}
