import { arguments_assert } from "./arguments_assert.mjs";
import { function_shape } from "./function_shape.mjs";
import { text_lines_working } from "./text_lines_working.mjs";
import { subtract } from "./subtract.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { add } from "./add.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { list_add_unique } from "./list_add_unique.mjs";
import { property_set } from "./property_set.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_shape_blocks_keys(love, line_count) {
  arguments_assert(arguments, 2);
  let by_block = {};
  for (let name of love) {
    let shape = await function_shape(name);
    let lines = text_lines_working(shape);
    let last = subtract(lines.length, line_count);
    let index = 0;
    while (less_than_equal(index, last)) {
      let stop = add(index, line_count);
      let window = lines.slice(index, stop);
      let block = list_join_newline(window);
      let known = property_exists(by_block, block);
      if (known) {
        let names = property_get(by_block, block);
        list_add_unique(names, name);
      } else {
        property_set(by_block, block, [name]);
      }
      index = add(index, 1);
    }
  }
  ("Windows belonging to one shared run all carry the same set of functions, so the");
  ("set is what gathers them back together.");
  let by_names = {};
  let blocks = properties_get(by_block);
  for (let block of blocks) {
    let names = property_get(by_block, block);
    let shared = list_multiple_is(names);
    if (shared) {
      list_sort_text(names);
      let key = list_join_comma(names);
      let known2 = property_exists(by_names, key);
      if (known2) {
        let windows = property_path_get_2(by_names, key, "windows");
        list_add(windows, block);
      } else {
        property_set(by_names, key, {
          names,
          windows: [block],
        });
      }
    }
  }
  let keys = properties_get(by_names);
  let r = {
    by_names,
    keys,
  };
  return r;
}
