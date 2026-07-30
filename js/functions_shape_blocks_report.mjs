import { functions_shape_blocks } from "./functions_shape_blocks.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { text_column } from "./text_column.mjs";
import { less_than } from "./less_than.mjs";
import { add } from "./add.mjs";
export async function functions_shape_blocks_report(line_count) {
  "Say out loud which sets of functions write the same run of lines out more than";
  "once, the biggest saving first, so a reader can judge which of them wants a shared";
  "unit written for it.";
  "The number is read off the words it arrives as, because a command line hands every";
  "argument over as writing and the counting below would otherwise glue a digit onto";
  "the end of a number instead of adding it.";
  let count = number_from_text(line_count);
  let groups = await functions_shape_blocks(count);
  let shown = 0;
  let index = 0;
  while (less_than(index, groups.length)) {
    let group = groups[index];
    let saving = property_get(group, "saving");
    let windows = property_get(group, "windows");
    let names = property_get(group, "names");
    let joined = list_join_comma(names);
    let left = text_column("" + saving, 7);
    let middle = text_column(windows + " runs", 11);
    console.log(left + middle + names.length + "  " + joined);
    shown = add(shown, 1);
    index = add(index, 1);
  }
  console.log("\nshared blocks of " + count + " lines: " + groups.length);
  let result = {
    lines: count,
    groups: groups.length,
    shown,
  };
  return result;
}
