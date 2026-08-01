import { text_split_comma } from "./text_split_comma.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { function_top_level_templates_flatten } from "./function_top_level_templates_flatten.mjs";
import { list_filter } from "./list_filter.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
export async function function_top_level_templates_flatten_multiple(
  names_comma,
) {
  "Flatten the top-of-file template comments of many functions and report how many files changed.";
  let names = text_split_comma(names_comma);
  let results = await list_map_async(
    names,
    function_top_level_templates_flatten,
  );
  function changed_is(result) {
    let changed_inner = property_get(result, "changed");
    return changed_inner;
  }
  let changed = list_filter(results, changed_is);
  let r = {
    asked: list_size(names),
    changed: list_size(changed),
  };
  return r;
}
