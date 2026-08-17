import { arguments_assert } from "./arguments_assert.mjs";
import { functions_shape_blocks_keys } from "./functions_shape_blocks_keys.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_shape_blocks_key(love, line_count) {
  arguments_assert(arguments, 2);
  let r = await functions_shape_blocks_keys(love, line_count);
  let keys = property_get(r, "keys");
  let by_names = property_get(r, "by_names");
  let groups = [];
  for (let key of keys) {
    let found = property_get(by_names, key);
    let names = property_get(found, "names");
    let windows = property_get(found, "windows");
    let left = subtract(names.length, 1);
    let saving = multiply(left, windows.length);
    list_add(groups, {
      names,
      windows: windows.length,
      saving,
      sample: windows[0],
    });
  }
  return groups;
}
